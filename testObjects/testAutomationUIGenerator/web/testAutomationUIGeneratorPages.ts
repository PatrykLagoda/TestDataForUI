import { Browser } from "../../../src/web/index.js";
import { MainPage, ResultPage, LoginPage, RepositoriesPage, RepositoryModal } from "./index.js";
import { TestFlowPage } from "./testFlowPage.js";

export class TestAutomationUIGeneratorPages {
    Main: MainPage;
    Result: ResultPage;
    Login: LoginPage;
    Repositories:  RepositoriesPage;
    TestFlow: TestFlowPage;

    constructor(browser: Browser) {
        this.Main = new MainPage(browser);
        this.Result = new ResultPage(browser);
        this.Login = new LoginPage(browser);
        this.Repositories = new RepositoriesPage(browser);
        this.TestFlow = new TestFlowPage(browser);
    }

    static async init(): Promise<TestAutomationUIGeneratorPages> {
        const browser = Browser.fetchMainBrowser();
        return new TestAutomationUIGeneratorPages(browser);
    }
}