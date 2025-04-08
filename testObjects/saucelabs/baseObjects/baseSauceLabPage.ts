import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { BasePageObject, Browser } from "../../../src/web/index.js";
import { SauceLabConfig } from "../index.js";

export class BaseSauceLabPage extends BasePageObject {
    constructor(pageName : string, endpoint : string, browser : Browser){
        super(pageName, SauceLabConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, browser);
    }
}