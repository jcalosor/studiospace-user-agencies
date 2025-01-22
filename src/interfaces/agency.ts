export interface Location {
    country: {
        code: string;
        name: string;
    };
}

export interface ServiceGroup {
    name: string;
}

export interface Service {
    service: {
        serviceGroup: ServiceGroup;
    };
}

export interface Agency {
    locations: Location[];
    agencyService: Service[];
}
