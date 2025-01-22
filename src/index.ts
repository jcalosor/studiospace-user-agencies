import AgencyService from './services/AgencyService';

(async () => {
    console.log('Starting agency processing...');
    const result = await new AgencyService().processAgencies();

    console.log('Results:');
    console.log(`Processed Agencies: ${result.processedCount}`);
    console.log('Region Counts:', result.regionCounts);
    console.log(`Targeted Agencies Count: ${result.targetedAgenciesCount}`);
    console.log(`Other Category Count: ${result.otherCount}`);
})();