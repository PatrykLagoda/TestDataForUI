import { Browser } from "../../../src/web/index.js";
import { SauceLabLoginPage } from "./index.js";

export class SauceLabPages {
    Login : SauceLabLoginPage;

    private constructor(browser : Browser) {
        this.Login = new SauceLabLoginPage(browser);
    }

    static async init() : Promise<SauceLabPages> {
        return new SauceLabPages(await Browser.fetchMainBrowser());
    }

    static async initNewInstance() : Promise<SauceLabPages> {
        return new SauceLabPages(await Browser.createNewBrowser());
    }
}