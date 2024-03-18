import { type Request, type Response } from 'express';
import axios from 'axios';
import { OAuth2Client } from 'google-auth-library';

import keys from '../config/oauth2.keys.json';
import config from '../config';

const oAuth2Client = new OAuth2Client(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[1]
);

export const googleForm = (req: Request, res: Response) => {
    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    });
    
    res.status(200).send(authorizeUrl);
}

export const googleRedirect = async (req: Request, res: Response) => {
    try {
        const code = req.query.code;

        const r = await oAuth2Client.getToken(code as string);
        oAuth2Client.setCredentials(r.tokens);
        
        const googleApi = 'https://www.googleapis.com/oauth2/v2/userinfo';

        const redirect = await axios.get(googleApi, {
            headers: {
                Authorization: `Bearer ${oAuth2Client.credentials.access_token}`,
            }
        })

        //여기에서 몽고DB에 접속하면 어떨까?

        res.status(200).redirect(`${config.client_domain}`);
    } catch (error) {
        throw error
    }
}