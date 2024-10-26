import ApiBase from "./api-base";
import { setApiAccessToken } from '../env/test.env';

export class ApiClaim extends ApiBase {
    public postAuthTokenUrl(): string {
        return `${this.apiBaseUrl}/jwtauth/idtoken`;
    }

    public async postAuthToken(): Promise<void> {
        const username: string = 'tRWdoPQux4Plgk49OPjV6TWjrX1rlRoC';
        const password: string = 'zygr7Ajz8oC7tMnI';
        const headers = {
            'Authorization': 'Basic ' + btoa(`${username}:${password}`),
            'Content-Type': 'application/json',
        };
        const data = {
            scope: "openid user",
            claims : {
                sub: "b816dd51-1c97-4ba6-9166-544837ce8b0a",
                aud: "widget",
                email: "altairtest581@gmail.com",
                given_name: "Hellow",
                family_name: "World",
                residence: "FR"
            }
        };
        const bodyInfo: any = await this.postMethod(this.postAuthTokenUrl(), headers, data);
        setApiAccessToken(bodyInfo.token);
    }
}
