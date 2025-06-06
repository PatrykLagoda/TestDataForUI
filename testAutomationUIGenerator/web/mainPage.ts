import { Wait } from "../../../src/common/index.js";
import {
  Browser,
  WebButton,
  WebElementArray,
  WebLabel,
  WebTextfield,
} from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";


export class MainPage extends BaseTestAutomationUIGeneratorPage {
  private loginBtn = new WebButton("/html/body/div/div/div/div[2]/div/div[1]/button", "login", this);
  private getStartedBtn = new WebButton("/html/body/div/div[1]/div/div/div[1]/div/button[1]", "get started", this);
  private howItWorksBtn = new WebButton("/html/body/div/div[1]/div/div/div[1]/div/button[2]", "how it works", this);


  constructor(browser: Browser) {
    super(browser, "main", "/");
  }

  /**
   * Clicks on the login button.
   * 
   * @returns {Promise<void>}
   */
  async clickLogin(): Promise<void> {
    await this.loginBtn.click();
  }

  /**
   * Checks that login was successful by verifying the visibility of
   * 'Get Started' and 'How It Works' buttons.
   * 
   * @returns {Promise<void>}
   */
  async expectTrueCheckIfLoggedIn(): Promise<Boolean> {
    await browser.refresh(); // Ensure the page is refreshed
    await Wait.for(1000); // Wait for a moment to let the page reload
  
    if (
      await this.getStartedBtn.isDisplayed() &&
      await this.howItWorksBtn.isDisplayed()
    ) {
     return false;
    } else {
      return true;
    }
  }

  /**
   * Checks that login was unsuccessful by verifying the invisibility of
   * 'Get Started' and 'How It Works' buttons.
   * 
   * @returns {Promise<void>}
   */
  async expectFalseCheckIfLoggedIn(): Promise<Boolean> {
    await browser.refresh(); // Ensure the page is refreshed
    await Wait.for(1000); // Wait for a moment to let the page reload
  
    if (
      await this.getStartedBtn.isDisplayed() &&
      await this.howItWorksBtn.isDisplayed()
    ) {
     return true;
    } else {
      return false;
    }
  }

  /**
   * Clicks the "How It Works" button.
   * 
   * @returns {Promise<void>}
   */
  async clickHowItWorksBtn(): Promise<void> {
    await this.howItWorksBtn.click();
  }

  /**
   * Clicks the "Get Started" button.
   * 
   * @returns {Promise<void>}
   */
  async clickGetStartedBtn(): Promise<void> {
    await Wait.for(1000);
    await this.getStartedBtn.click();
  }
}
