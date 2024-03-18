import dotenv from 'dotenv';

dotenv.config();

interface Config {
    client_domain: string | undefined;
    server_domain: string | undefined;
    port: string | undefined;
    access_secret_key: string | undefined;
    refresh_secret_key: string | undefined;
}

const config: Config = {
    client_domain: process.env.CLIENT_DOMAIN,
    server_domain: process.env.SERVER_DOMAIN,
    port: process.env.PORT,
    access_secret_key: process.env.ACCESS_SECRET_KEY,
    refresh_secret_key: process.env.REFRESH_SECRET_KEY
}

export default config