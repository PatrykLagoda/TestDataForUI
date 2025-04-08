import { RestConfig, User } from "../../../config/index.js";
import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { BaseServiceObject } from "../../baseObjects/index.js";
import { AuthenticationService } from "../authentication/authenticationService.js";
import { dummyjsonConfig } from "../dummyjsonConfig.js";

export class BaseDummyjsonServiceObject extends BaseServiceObject {
    constructor(endpoint: string, name: string, user: User) {
        super(dummyjsonConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, name, new AuthenticationService(user), RestConfig.objectConfigs.dummyjson)
    }
}