export function log(message: string): void {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

export function errorLog(message: string): void {
    console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
}