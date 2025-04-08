import { RestConfig } from "../../config/index.js";
import { EnvironmentConfigUtil } from "../../src/common/index.js";
import { BaseServiceObject } from "../../src/rest/index.js";
import PostcodesConfig from "./config.postcodes.rest.js";

export class BasePostcodeService extends BaseServiceObject {
    constructor(name: string, endpoint: string) {
        super(PostcodesConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, name, null, RestConfig.objectConfigs.postcodes);
    }
}