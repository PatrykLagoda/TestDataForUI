import { Log } from "../../../src/common/index.js";
import { Browser, WebElement, WebElementArray, WebLabel } from "../../../src/web/index.js";
import { BaseHerokuPage } from "../baseObjects/index.js";

export class HerokuLargePage extends BaseHerokuPage {
    private largeTable = new WebElement("#large-table", "Large Table", this);
    private tableHeaders = new WebElementArray<WebLabel>("th[id]", "table headers", this); 

    constructor(browser : Browser){
        super("Large Page", "/large", browser);
    }

    async printTableHeadersArray(){
        let elements = await this.tableHeaders.getElements();
        await elements.forEach(async element => {
            Log.info(await element.getText())
        });
    }

    async printTableHeaders(){
        let elements = await this.largeTable.findElements("th[id]", "table headers", this, WebElement).getElements();
        await elements.forEach(async element => {
            Log.info(await element.getText())
        });
    }
}