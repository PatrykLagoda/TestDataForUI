import { Wait } from "../../../src/common/index.js";
import { TestAutomationUIGeneratorPages } from "../../../testObjects/testAutomationUIGenerator/web/index.js";

describe("C3 - TestAutomationUIGenerator test - Website", () => {
    let pages: TestAutomationUIGeneratorPages;
    const screenPath = "tests/examples/testAutomationUIGenerator/screenshots"
   
    before("Init pages & navigate", async () => {
        pages = await TestAutomationUIGeneratorPages.init();
        await pages.Main.navigateTo();
    });

    it("Login to the Testing Automation UI Generator", async () => {
        await pages.Main.expectFalseCheckIfLoggedIn();
        await pages.Login.loginThroughPopup("x", "x");
        await pages.Main.expectTrueCheckIfLoggedIn();
    });
    it("Make a new repository configuration", async () => {
        await pages.Main.clickGetStartedBtn();
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-1_StartRepo.png");
        await pages.Repositories.openCreateRepositoryModal();
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-2_StartRepo.png");
        const isModalOpen = await pages.Repositories.isModalOpen("create");
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-3_ModalIsOpen.png");
        expect(isModalOpen).toBe(true);
        await pages.Repositories.Modal.fillGitHubStep("https://github.com/patrykLagoda", "x", 1);
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-4_ChoseRepo.png");
        await pages.Repositories.Modal.selectRepository("TestDataForUI");
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-5_TestDataForUIChosen.png");
        await pages.Repositories.Modal.setNameAndClickSequence("Login Flow 2", [
            { selector: "//span[text()='testObjects']/parent::div", name: "Open testObjects" },
            { selector: "//span[text()='testAutomationUIGenerator']/parent::div", name: "Open testAutomationUIGenerator" },
            { selector: "//span[text()='web']/parent::div", name: "Open web folder" },
            { selector: "//span[text()='loginPage.ts']/preceding-sibling::input[@type='checkbox']", name: "Select loginPage.ts" }
          ]);
        await pages.Main.takeScreenshot(screenPath, "TEST3-STEP2-6_TestDataForUIChosen.png");
    });
    it("Select a Repository an make a TestFlow", async () => {
        await pages.Main.takeScreenshot(screenPath, "TEST3-1_StartRepo.png");
        await pages.Repositories.selectRepositoryByName("Login Flow 2");
        await pages.Main.takeScreenshot(screenPath, "TEST3-2_SelectedRepo.png");
        await pages.Repositories.goBackToTestFlows();
        await pages.Main.takeScreenshot(screenPath, "TEST3-3_TestFlowPageForSelectedRepo.png");
        await pages.TestFlow.createNewTestFlow("Test Flow 2", "Description for this test.");
       // await pages.TestFlow.goBackToTestFlows();
        await pages.Main.takeScreenshot(screenPath, "TEST3-4_TestFlowPageForSelectedRepoShow.png");
    });
    it("Select a TestFlow make test and reconfigure", async () =>{
        await pages.TestFlow.selectFileByName("loginPage.ts");
        await pages.TestFlow.selectMethodByName("loginThroughPopup")
        await pages.TestFlow.fillInPageObjectContainerInput("TestAutomationUIGeneratorPages");
        await pages.TestFlow.upDateFlow();
        await Wait.for(30000);
        
    });

});