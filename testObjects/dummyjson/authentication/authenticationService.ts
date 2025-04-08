import { RestConfig, User } from "../../../config/index.js";
import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { IAuthenticationObject } from "../../../src/rest/index.js";
import { BaseServiceObject } from "../../baseObjects/index.js";
import { dummyjsonConfig } from "../dummyjsonConfig.js";
import { AuthenicationResponse } from "./authenticationResponse.js";


export class AuthenticationService extends BaseServiceObject implements IAuthenticationObject{
    constructor(user: User) {
        super(dummyjsonConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], "/auth/login", "dummy authentication service", undefined, RestConfig.objectConfigs.dummyjson);
        this.user = user;
    }
    async getToken(): Promise<string> {
        const authenticationResponse = await this.restClient.post().usingDefaultHeaders().usingJSONBody({username: this.user.username, password: this.user.password}).perform();
        return (authenticationResponse.parsedResponse as AuthenicationResponse).token;
    }
}