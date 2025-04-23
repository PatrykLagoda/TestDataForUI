import { WordArray } from "crypto-es/lib/core.js";
import { Wait } from "../../../src/common/index.js";
import { Browser, WebButton, WebElement, WebLabel, WebTextfield } from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";
import { cli } from "winston/lib/winston/config/index.js";

export class TestFlowPage extends BaseTestAutomationUIGeneratorPage {
    private createNewTestFlowBtn = new WebLabel(`/html/body/div/div[2]/div/div/div[1]/button`, "create button for new flow", this);
    private testFlowNameInputField = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[1]/input[1]`, "input for test flow name", this);
    private testFlowDescriptionInputField = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[1]/input[2]`, "input description field", this)
    private testFlowSaveFlow = new WebTextfield(`/html/body/div/div[2]/div/div/div[1]/div[2]/button`, "save test flow", this)
    private backToTestFlowsBtn =  new WebButton(`/html/body/div/div[1]/div[1]/button`, "button go back to testflows", this)
    private backToFilesBtn = new WebButton(`/html/body/div/div[2]/div/div/div[3]/div[1]/div/div/button`, "button back to files", this)
    private testFlowStepStepsDiv = new WebElement(`/html/body/div/div[2]/div/div/div[3]/div[2]/div/div[1]/div/div[2]/div[2]`, "flow steps div", this)
    private containerClassNamePageContainerInputField = new WebTextfield(`//*[@id="page-container"]`, "input field object container", this) 


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
  await this.upDateFlow();
}

/**
 * Navigates back to the Test Flows page.
 * @returns {Promise<void>}
 */
async goBackToTestFlows(): Promise<void> {
  await Wait.for(500);
  await this.backToTestFlowsBtn.click();
}

/**
 * Selects a file from the list by matching its visible text.
 * @param {string} searchText - The exact name of the file to select.
 * @returns {Promise<void>}
 */
async selectFileByName(searchText: string): Promise<void> {
  const parentElement = new WebElement(
    `/html/body/div/div[2]/div/div/div[3]/div[1]/div/div/div[3]`,
    "files list",
    this
  );

  const childrenArray = await parentElement.findElements("*", "element", this, WebElement);
  const children = await childrenArray.getElements();

  for (const child of children) {
    try {
      const text = (await child.getText())?.trim();
      if (text === searchText) {
        await child.click();
        return;
      }
    } catch {
      // Silently ignore and continue
    }
  }
}

/**
 * Selects a method from the list by matching its visible text.
 * Only works if the method list is currently displayed.
 * @param {string} searchText - The exact name of the method to select.
 * @returns {Promise<void>}
 */
async selectMethodByName(searchText: string): Promise<void> {
  await Wait.for(500);
  const isVisible = this.backToFilesBtn.isDisplayed();

  if (isVisible) {
    const parentElement = new WebElement(
      `/html/body/div/div[2]/div/div/div[3]/div[1]/div/div/div[3]/div`,
      "method list",
      this
    );

    const childrenArray = await parentElement.findElements("*", "element", this, WebElement);
    const children = await childrenArray.getElements();

    for (const child of children) {
      try {
        const text = (await child.getText())?.trim();
        if (text === searchText) {
          await child.click();

          if (this.testFlowStepStepsDiv.isDisplayed()) {
            return expect(isVisible).toBe(true);
          }
        }
      } catch {
        // Silently ignore and continue
      }
    }
  }
}

/**
 * Fills in the Page Object container class name input field.
 * @param {string} className - The name of the class to enter.
 * @returns {Promise<void>}
 */
async fillInPageObjectContainerInput(className: string): Promise<void> {
  await this.containerClassNamePageContainerInputField.sendText(className);
}

/**
 * Saves the current test flow.
 * @returns {Promise<void>}
 */
async upDateFlow(): Promise<void> {
  await this.testFlowSaveFlow.click();
  await Wait.for(5000);
}

}