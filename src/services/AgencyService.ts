import axios from 'axios';
import agencyServiceConfig from "../configs/api";

export default class AgencyService {

    private config;

    constructor() {
        this.config = agencyServiceConfig;
    }

    async getAgencies(skip: number): Promise<any> {
        try {
            const response = await axios.get(`${this.config.api_endpoint}?skip=${skip}`);

            return response.data;
        } catch (error) {
            // @ts-ignore
            console.error(`Error fetching agencies at skip=${skip}:`, error.message);
            return [];
        }
    }

    async processAgencies(): Promise<{
        processedCount: number;
        regionCounts: Record<string, number>;
        targetedAgenciesCount: number;
        otherCount: number;
    }> {
        let skip = 0;
        let processedCount = 0;
        let otherCount = 0;
        let targetedAgenciesCount = 0;
        const regionCounts: Record<string, number> = {
            AU: 0,
            GB: 0,
            US: 0,
        };

        while (true) {
            console.log(`Fetching agencies with skip=${skip}...`);
            let groupCount = 0;
            const [agencyGroups, initialProcessCount] = await this.getAgencies(skip);


            if (!agencyGroups.length) {
                break;
            }

            for (let agencyGroupKey in agencyGroups) {

                 // Check regions
                 const regions = agencyGroups[agencyGroupKey].locations
                     .map((location: { country: { code: string } }) => location.country.code)
                     .filter((code: string) => this.config.target_regions.includes(code));

                 regions.forEach((region: string | number) => {
                     regionCounts[region]++;
                 });

                 // Check service groups
                 const hasTargetServiceGroup = agencyGroups[agencyGroupKey].agencyService.some((service: any) =>
                     this.config.target_service_groups.includes(service.service.serviceGroup.name)
                 );

                 if(hasTargetServiceGroup) {
                     targetedAgenciesCount++;
                 }

                 if (!hasTargetServiceGroup) {
                     otherCount++;
                 }

                processedCount++;
            }

            skip += this.config.batch_size;
        }

        return { processedCount, targetedAgenciesCount, regionCounts, otherCount };
    }
}
