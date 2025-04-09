import { main } from "appium";
import { Wait } from "../../../src/common/index.js";
import {
  Browser,
  WebButton,
  WebElement,
  WebTextfield,
} from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";
import { MainPage } from "./mainPage.js";

export class LoginPage extends BaseTestAutomationUIGeneratorPage {
  private loginInput = new WebTextfield("#i0116", "login input", this);
  private loginNextBtn = new WebButton(
    "#idSIButton9",
    "login next button",
    this
  );
  private passwordInput = new WebTextfield("#i0118", "password input", this);
  private signinBtn = new WebButton("#idSIButton9", "signin button", this);
  private displayName = new WebElement("#displayName", "display email", this);

  constructor(browser: Browser) {
    super(browser, "login", "popup");
  }

  async loginThroughPopup(email: string, password: string): Promise<void> {
    const mainPage = new MainPage(this.browser);

    // Get handles BEFORE clicking login
    const handlesBefore = await browser.getWindowHandles();

    await mainPage.clickLogin();

    // Wait until a new window handle appears
    let popupHandle: string | undefined;

    await browser.waitUntil(
      async () => {
        const handlesAfter = await browser.getWindowHandles();
        popupHandle = handlesAfter.find((h) => !handlesBefore.includes(h));
        return Boolean(popupHandle);
      },
      {
        timeout: 10000,
        timeoutMsg: "Popup window handle not found.",
      }
    );

    if (!popupHandle) throw new Error("Popup window handle not found.");

    await browser.switchToWindow(popupHandle);
    await browser.pause(1000);
    await this.enterCredentials(email, password);
    await browser.pause(2000);
    await browser.switchToWindow(handlesBefore[0]);
    await browser.pause(2000);
    await browser.refresh();
    await mainPage.clickLogin();
    await browser.pause(2000);
  }

    async enterCredentials(
    email: string,
    password: string
  ): Promise<void> {
    await Wait.for(1000);
    try {
      if (await this.loginInput.isDisplayed(true)) {
        await this.loginInput.sendText(email);
        await Wait.for(500);
        await this.loginNextBtn.click();
      }
    } catch {}
    await Wait.for(1000);
    try {
      if (await this.passwordInput.isDisplayed(true)) {
        await this.passwordInput.sendText(password);
        await Wait.for(500);
        await this.signinBtn.click();
      }
    } catch {}
    try {
      if (await this.displayName.isDisplayed(true)) {
        await Wait.for(500);
        const emailDisplayName = await this.displayName.getValue();
        if (emailDisplayName == email) {
          await this.signinBtn.click();
        }
      }
    } catch {}
    await Wait.for(500);
  }
}
