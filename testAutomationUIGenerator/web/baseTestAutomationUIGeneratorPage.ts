import { EnvironmentConfigUtil } from "../../../src/common/index.js";
import { BasePageObject, Browser } from "../../../src/web/index.js";
import TestAutomationUIGeneratorConfig from "./config.testAutomationUIGenerator.rest.js";

export class BaseTestAutomationUIGeneratorPage extends BasePageObject{
    constructor(browser: Browser, pageName: string, endpoint: string) {
        super("TestAutomationUIGenerator - " + pageName, TestAutomationUIGeneratorConfig.baseUrl[EnvironmentConfigUtil.getEnvironment()], endpoint, browser);
    }
}