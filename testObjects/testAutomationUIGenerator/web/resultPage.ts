import { Wait } from "../../../src/common/index.js";
import { Browser, WebLabel } from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";

export class ResultPage extends BaseTestAutomationUIGeneratorPage {
    private titleLbl = new WebLabel(".mw-page-title-main", "search result title", this);
    private bodyContent = new WebLabel("#bodyContent", "search result body", this);
    
    constructor(browser: Browser) {
        super(browser, "result", "/");
    }

    async getBody() {
        return await this.bodyContent.getText();
    }

    async getTitle() {
        await Wait.for(500);
        return await this.titleLbl.getText();
    }


}