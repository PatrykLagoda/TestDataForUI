import { Browser } from "../../../src/web/browser.js";
import { MainPage, ResultPage } from "./index.js";

export class WikipediaPages {
    Main: MainPage;
    Result: ResultPage;

    constructor(browser: Browser) {
        this.Main = new MainPage(browser);
        this.Result = new ResultPage(browser);
    }

    static async init(): Promise<WikipediaPages> {
        const browser = Browser.fetchMainBrowser();
        return new WikipediaPages(browser);
    }
}