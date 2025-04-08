import { RestConfig } from "../../../config/index.js";
import { EnvironmentConfigUtil, Log } from "../../../src/common/index.js";
import { BaseServiceObject } from "../../baseObjects/index.js";
import WikipediaConfig from "./config.wikipedia.rest.js";

export class BaseWikipediaService extends BaseServiceObject {
    constructor(name: string, endpoint: string) {
        super(WikipediaConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, name, null, null);
    }
}