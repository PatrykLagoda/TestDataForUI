import { TestAutomationUIGeneratorPages } from "../../../testObjects/testAutomationUIGenerator/web/index.js";

describe("C1 - TestAutomationUIGenerator test - Website", () => {
    let pages: TestAutomationUIGeneratorPages;

    before("Init pages & navigate", async () => {
        pages = await TestAutomationUIGeneratorPages.init();
        await pages.Main.navigateTo();
    });

    it("Login to the Testing Automation UI Generator", async () => {
        await pages.Main.expectFalseCheckIfLoggedIn();
        await pages.Login.loginThroughPopup("x", "x");
        await pages.Main.expectTrueCheckIfLoggedIn();
    });
});
  