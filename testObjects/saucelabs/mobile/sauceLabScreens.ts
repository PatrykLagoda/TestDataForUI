import { Browser } from "../../../src/web/index.js";
import { SauceLabLoginScreen } from "./index.js";

export class SauceLabScreens {
    Login : SauceLabLoginScreen;
    
    private constructor(browser : Browser) {
        this.Login = new SauceLabLoginScreen(browser);
    }

    static async init() : Promise<SauceLabScreens> {
        return new SauceLabScreens(await Browser.fetchMainBrowser());
    }

    static async initNewInstance() : Promise<SauceLabScreens> {
        return new SauceLabScreens(await Browser.createNewBrowser());
    }
}