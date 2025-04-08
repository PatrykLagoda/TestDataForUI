import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { Browser, BasePageObject } from "../../../src/web/index.js";
import { HerokuConfig } from "../index.js";

export class BaseHerokuPage extends BasePageObject {

    constructor(pageName : string, endpoint : string, browser : Browser){
        super(pageName, HerokuConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, browser);
    }

}