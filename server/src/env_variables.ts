import * as dotenv from 'dotenv';

dotenv.config();

function getEnvVar(name: string, defaultValue?: any): any {
    let envVariable = process.env[name] || defaultValue;
    if (envVariable === undefined) {
        throw new Error(`environment variable ${name} is undefined`);
    }
    return envVariable;
}
export const envVars = {
    SERVER_PORT: getEnvVar('SERVER_PORT',8081),
    SCRAPING_MODULE_URL: getEnvVar('SCRAPING_MODULE_URL', 'http://localhost:8080'),
    DB_URL: getEnvVar('DB_URL', ''),
}
