import { Browser, WebCheckBox } from "../../../src/web/index.js";
import { BaseHerokuPage } from "../baseObjects/index.js";

export class HerokuCheckboxPage extends BaseHerokuPage {
    private checkbox1 = new WebCheckBox("//form[@id='checkboxes']/input[1]", "Checkbox 1", this);
    private checkbox2 = new WebCheckBox("//form[@id='checkboxes']/input[2]", "checkbox 2", this); 

    constructor(browser : Browser){
        super("Checkbox Page", "/checkboxes", browser);
    }

    async selectbox1(){
        await this.checkbox1.select();
    }

    async deselectbox1(){
        await this.checkbox1.deselect();
    }

    async selectbox2(){
        await this.checkbox2.select();
    }

    async deselectbox2(){
        await this.checkbox2.deselect();
    }
}