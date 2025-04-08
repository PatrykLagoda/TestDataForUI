import { Browser, WebDropdown } from "../../../src/web/index.js";
import { BaseHerokuPage } from "../baseObjects/index.js";

export class HerokuDropdownPage extends BaseHerokuPage {
    private optionDrp = new WebDropdown("#dropdown", "Dropdown menu list", this);

    constructor(browser : Browser){
        super("Dropdown Page", "/dropdown", browser);
    }

    async selectText(text : string) {
        await this.optionDrp.selectByText(text);
    }

    async selectAttribute(attribute : string, value : string){
        return await this.optionDrp.selectByAttribute(attribute, value);
    }

    async selectIndex(index : number) {
        return await this.optionDrp.selectByIndex(index);
    }

    async getSelectedOption() : Promise<string> {
        return await this.optionDrp.getSelectedText();
    }
}