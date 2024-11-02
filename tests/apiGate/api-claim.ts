import ApiBase from './api-base';
import { setApiAccessToken } from '../helper/setAuthToken';
import {
  type IHeaderType,
  type ICredentials,
  type ILoginData,
} from '../data/data-types';

export class ApiClaim extends ApiBase {
  public postAuthTokenUrl(): string {
    return `${this.apiBaseUrl}/jwtauth/idtoken`;
  }

  public async postAuthToken(): Promise<void> {
    const credentials: ICredentials = {
      username: 'tRWdoPQux4Plgk49OPjV6TWjrX1rlRoC',
      password: 'zygr7Ajz8oC7tMnI',
    };
    const headers: IHeaderType = {
      Authorization:
        'Basic ' + btoa(`${credentials.username}:${credentials.password}`),
      'Content-Type': 'application/json',
    };
    const data: ILoginData = {
      scope: 'openid user',
      claims: {
        sub: 'b816dd51-1c97-4ba6-9166-544837ce8b0a',
        aud: 'widget',
        email: 'altairtest581@gmail.com',
        given_name: 'Hellow',
        family_name: 'World',
        residence: 'FR',
      },
    };
    const bodyInfo = await this.postMethod(
      this.postAuthTokenUrl(),
      headers,
      data,
    );
    setApiAccessToken(bodyInfo.token);
  }
}
