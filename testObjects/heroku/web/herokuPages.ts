import { Browser } from "../../../src/web/index.js";
import { HerokuLoginPage, HerokuSecureAreaPage, HerokuLargePage, HerokuDropdownPage, HerokuCheckboxPage } from "./index.js";

export class HerokuPages {
    LoginPage : HerokuLoginPage;
    SecureAreaPage : HerokuSecureAreaPage;
    LargePage : HerokuLargePage;
    DropdownPage : HerokuDropdownPage;
    CheckboxPage : HerokuCheckboxPage;

    private constructor(browser : Browser){
        this.LoginPage = new HerokuLoginPage(browser);
        this.SecureAreaPage = new HerokuSecureAreaPage(browser);
        this.LargePage = new HerokuLargePage(browser);
        this.DropdownPage = new HerokuDropdownPage(browser);
        this.CheckboxPage = new HerokuCheckboxPage(browser);
    }

    static async init() : Promise<HerokuPages> {
        return new HerokuPages(await Browser.fetchMainBrowser());
    }

    static async initNewInstance() : Promise<HerokuPages> {
        return new HerokuPages(await Browser.createNewBrowser());
    }
}