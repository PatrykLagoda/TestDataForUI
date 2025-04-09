import { Browser } from "../../../src/web/index.js";
import { MainPage, ResultPage, LoginPage } from "./index.js";

export class TestAutomationUIGeneratorPages {
    Main: MainPage;
    Result: ResultPage;
    Login: LoginPage;

    constructor(browser: Browser) {
        this.Main = new MainPage(browser);
        this.Result = new ResultPage(browser);
        this.Login = new LoginPage(browser);
    }

    static async init(): Promise<TestAutomationUIGeneratorPages> {
        const browser = Browser.fetchMainBrowser();
        return new TestAutomationUIGeneratorPages(browser);
    }
}