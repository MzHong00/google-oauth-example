import { type Express } from 'express'
import expressLoader from './express'

interface ExpressApp { 
    expressApp: Express;
}

export default async ({ expressApp }: ExpressApp) => {
    await expressLoader(expressApp)
}