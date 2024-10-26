import axios from 'axios';
import { setApiAccessToken } from '../env/test.env';

export default class ApiBase {
    public apiBaseUrl: string = 'https://qa-allianz-partners.apis.allianz.com';

    public async postMethod(
        endpoint: string,
        headersData: object,
        bodyData: string | object,
        errorMessage?: boolean
    ): Promise<void> {
        let bodyInfo: any = {};
        const headers = headersData;
        await axios.post(endpoint, bodyData, { headers })
        .then((response) => {
            bodyInfo = response.data;
        })
        .catch((error) => {
            bodyInfo = error.response;
            if (errorMessage) {
                console.error(`
                Error code status: ${error.response.status}
                Error message: ${error.response.data.message}
                URL: ${endpoint}
                Headers to be send: ${JSON.stringify(headersData)}
                Request date and time: ${error.response.headers.date}
                `);
            }
        });
        return bodyInfo;
    };
};
