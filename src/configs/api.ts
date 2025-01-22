import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

const agencyServiceConfig = {
    api_endpoint: 'https://api.app.studiospace.com/listings/list-agencies',
    batch_size: 12,
    target_regions: ['AU', 'GB', 'US'],
    target_service_groups: ['Advertising, Brand & Creative', 'Media, PR & Events']
}

export default agencyServiceConfig;