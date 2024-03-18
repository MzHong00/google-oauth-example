import express, { type Express } from 'express';
import loaders from './src/loaders';
import config from './src/config';

const startApp = async () => {
    const app: Express = express();

    await loaders({ expressApp: app })

    app.listen(config.port, () => {
        console.log(`${config.server_domain}`);
    });
}

startApp();