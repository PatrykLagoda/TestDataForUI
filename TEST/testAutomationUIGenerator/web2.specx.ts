import { TestAutomationUIGeneratorPages } from "../../../testObjects/testAutomationUIGenerator/web/index.js";

describe("C2 - TestAutomationUIGenerator test - Website", () => {
    let pages: TestAutomationUIGeneratorPages;
    const screenPath = "tests/examples/testAutomationUIGenerator/screenshots"
    before("Init pages & navigate", async () => {
        pages = await TestAutomationUIGeneratorPages.init();
        await pages.Main.navigateTo();
    });

    it("Login to the Testing Automation UI Generator", async () => {
        await pages.Main.expectFalseCheckIfLoggedIn();
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP1-1_NoLoggedIn.png");
        await pages.Login.loginThroughPopup("x", "x");
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP1-2_LoggedIn.png");
        await pages.Main.expectTrueCheckIfLoggedIn();
    });
    it("Make a new repository configuration", async () => {
        await pages.Main.clickGetStartedBtn();
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-1_StartRepo.png");
        await pages.Repositories.openCreateRepositoryModal();
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-2_StartRepo.png");
        const isModalOpen = await pages.Repositories.isModalOpen("create");
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-3_ModalIsOpen.png");
        expect(isModalOpen).toBe(true);
        await pages.Repositories.Modal.fillGitHubStep("https://github.com/patrykLagoda", "x", 1);
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-4_ChoseRepo.png");
        await pages.Repositories.Modal.selectRepository("TestDataForUI");
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-5_TestDataForUIChosen.png");
        await pages.Repositories.Modal.setNameAndClickSequence("Login Flow", [
            { selector: "//span[text()='testObjects']/parent::div", name: "Open testObjects" },
            { selector: "//span[text()='testAutomationUIGenerator']/parent::div", name: "Open testAutomationUIGenerator" },
            { selector: "//span[text()='web']/parent::div", name: "Open web folder" },
            { selector: "//span[text()='loginPage.ts']/preceding-sibling::input[@type='checkbox']", name: "Select loginPage.ts" }
          ]);
        await pages.Main.takeScreenshot(screenPath, "TEST2-STEP2-6_TestDataForUIChosen.png");
    });
    it("Select a Repository", async () => {
        await pages.Main.takeScreenshot(screenPath, "TEST2-7_SelectActiveRepo.png");
        await pages.Repositories.selectRepositoryByName("Login Flow");
        await pages.Main.takeScreenshot(screenPath, "TEST2-8_SelectedRepo.png");
        await pages.Repositories.openEditNameModal();
    });
});