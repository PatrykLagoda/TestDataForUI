import { Wait } from "../../../src/common/index.js";
import { Browser, WebButton, WebElementArray, WebLabel, WebTextfield } from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";

export class MainPage extends BaseTestAutomationUIGeneratorPage {
    private loginBtn = new WebButton("/html/body/div/div/div/div[2]/div/div[1]/button", "login", this);
    private getStartedBtn = new WebButton("/html/body/div/div[1]/div/div/div[1]/div/button[1]", "get started", this);
    private howItWorksBtn = new WebButton("/html/body/div/div[1]/div/div/div[1]/div/button[2]", "get started", this);

    constructor(browser: Browser) {
        super(browser, "main", "/");
    }

    async clickLogin() {
        await this.loginBtn.click();
    }
    async expectTrueCheckIfLoggedIn(){
    await browser.refresh(); // Ensure the page is refreshed
    await Wait.for(2000); // Wait for a moment to let the page reload
    let result;
        if (await this.getStartedBtn.isDisplayed() && await this.howItWorksBtn.isDisplayed()) {
            result  =  true;
        }else{
            result = false;
        }
        expect(result).toBe(true);
    }
    async expectFalseCheckIfLoggedIn(){
        await browser.refresh(); // Ensure the page is refreshed
        await Wait.for(2000); // Wait for a moment to let the page reload
        let result;
            if (await this.getStartedBtn.isDisplayed() && await this.howItWorksBtn.isDisplayed()) {
                result  =  true;
            }else{
                result = false;
            }
            expect(result).toBe(false);
        }

    async clickHowItWorksBtn(){
        await this.howItWorksBtn.click();
    }

    async clickGetStartedBtn(){
        await this.getStartedBtn.click();
    }

}