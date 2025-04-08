import { EnvironmentConfig } from "../../../config/index.js";
import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { BasePageObject, Browser } from "../../../src/web/index.js";
import WikipediaConfig from "./config.wikipedia.rest.js";

export class BaseWikipediaPage extends BasePageObject{
    constructor(browser: Browser, pageName: string, endpoint: string) {
        super("Wikipedia - " + pageName, WikipediaConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, browser);
    }
}