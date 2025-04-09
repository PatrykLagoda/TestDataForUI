import { TestAutomationUIGeneratorPages } from "../../../testObjects/testAutomationUIGenerator/web/index.js";

describe("C1 - TestAutomationUIGenerator test - Website", () => {
    let pages: TestAutomationUIGeneratorPages;
    const searchTerm = "Software testing";
    const screenPath = "tests/examples/testAutomationUIGenerator/screenshots"
    before("Init pages & navigate", async () => {
        pages = await TestAutomationUIGeneratorPages.init();
        await pages.Main.navigateTo();
    });

    it("Login to the Testing Automation UI Generator", async () => {
        await pages.Main.expectFalseCheckIfLoggedIn();
        await pages.Main.takeScreenshot(screenPath, "STEP1-1_NoLoggedIn.png");
        await pages.Login.loginThroughPopup("x", "x");
        pages.Main.takeScreenshot(screenPath, "STEP1-2_LoggedIn.png");
        await pages.Main.expectTrueCheckIfLoggedIn();
    });
    it("Make a new repository configuration", async () => {
        await pages.Main.clickGetStartedBtn();
        pages.Main.takeScreenshot(screenPath, "STEP2-1_StartRepo.png");
        const isModalOpen = await pages.Repositories.isModalOpen("create");
        pages.Main.takeScreenshot(screenPath, "STEP2-2_ModalIsOpen.png");
        expect(isModalOpen).toBe(true);
        await pages.Repositories.Modal.fillGitHubStep("https://github.com/patrykLagoda", "x", 1);
        pages.Main.takeScreenshot(screenPath, "STEP2-3_ChoseRepo.png");
        await pages.Repositories.Modal.selectRepository("TestDataForUI");
        pages.Main.takeScreenshot(screenPath, "STEP2-4_TestDataForUIChosen.png");
    });
});