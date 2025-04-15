import { WordArray } from "crypto-es/lib/core.js";
import { Wait } from "../../../src/common/index.js";
import { Browser, WebLabel, WebTextfield } from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";

export class TestFlowPage extends BaseTestAutomationUIGeneratorPage {
    private createNewTestFlowBtn = new WebLabel(`/html/body/div/div[2]/div/div/div[1]/button`, "create button for new flow", this);
    private testFlowNameInputField = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[1]/input[1]`, "input for test flow name", this);
    private testFlowDescriptionInputField = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[1]/input[2]`, "input description field", this)
    private testFlowSaveFlow = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[2]/button`, "save test flow", this)

    constructor(browser: Browser) {
        super(browser, "testFlow", "/");
    }

/**
   * Creates a new test flow by filling in the name and optional description,
   * then clicking the save button.
   * @param {string} name - The name of the new test flow.
   * @param {string} [description] - Optional description for the test flow.
   * @returns {Promise<void>}
   */
async createNewTestFlow(name: string, description?: string): Promise<void> {
    await Wait.for(500);
    await this.createNewTestFlowBtn.click();
    await Wait.for(500);
    await this.testFlowNameInputField.click();
    await Wait.for(500);
    await this.testFlowNameInputField.sendText(name);
    await Wait.for(500);
    await this.testFlowDescriptionInputField.click();
    await Wait.for(500);
    await this.testFlowDescriptionInputField.sendText(description);
    await Wait.for(500);
    await this.testFlowSaveFlow.click();
    await Wait.for(5000);
}
}