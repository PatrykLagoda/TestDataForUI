import { Wait } from "../../../src/common/index.js";
import {
  Browser,
  WebButton,
  WebCheckBox,
  WebElement,
  WebElementArray,
  WebTextfield,
} from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";


export class RepositoryModal extends BaseTestAutomationUIGeneratorPage {
  constructor(browser: Browser) {
    super(browser, "repositories", "modal");
  }
    // ─── Step Indicator ───────────────────────────────────────────────
    stepIndicator = new WebElement(".step-indicator", "step indicator", this);
  
    // ─── Step 1: GitHub Token/Owner Configuration ─────────────────────
    githubOwnerInput = new WebTextfield(
      '//*[@id="github-url"]',
      "GitHub owner input",
      this
    );
    githubTokenInput = new WebTextfield(
      '//*[@id="github-token"]',
      "GitHub token input",
      this
    );
    githubStepNextBtn = new WebButton(
      '//*[@id="radix-:r0:"]/div[2]/div/form/button',
      "GitHub step next button",
      this
    );
    githubFoundRepositoriesCountText = new WebElement(
      `//*[@id="radix-:r0:"]/div[2]/div/div/div[1]/p[2]`,
      `Github p field containing amount of found fields "Found * repositories"`,
      this);
    githubContinueBtn= new WebButton(
      `//*[@id="radix-:r0:"]/div[2]/div/div/div[2]/button[1]`,
      `Github change settings`, 
      this
    );
    githubChangeSettingsBtn= new WebButton(
      `//*[@id="radix-:r0:"]/div[2]/div/div/div[2]/button[2]`,
      `Github change settings`, 
      this
    );
  
    // ─── Step 2: Repository Selection ─────────────────────────────────
    repoDropdown = new WebElement(`//*[@id="radix-:r0:"]/div[2]/div/div[2]`, "repository select", this);
    repoOption = (repoName: string) =>
      new WebElement(
        `//div[@id="radix-:r0:"]//div[normalize-space(text())="${repoName}"]`,
        `repository option: ${repoName}`,
        this
      );
    repoStepNextBtn = new WebButton(
      '//*[@id="radix-:r0:"]/div[2]/div/div[3]/button',
      "Repo selection next button",
      this
    );
  
    // ─── Step 3: File Selection & Naming ──────────────────────────────
    repoDisplayNameInput = new WebTextfield(
      '//*[@id="radix-:r0:"]/div[2]/div/div[1]/input',
      "repository display name input",
      this
    );
    fileCheckboxes = new WebElementArray(
      "#radix-\:r0\: > div.py-2 > div > div.grid.grid-cols-3.gap-4.h-\[320px\] > div.col-span-2 > div.border.border-gray-300.rounded-md.h-\[290px\].overflow-auto.p-2 > ul > li:nth-child(1) > div > ul > li:nth-child(6) > div > ul > li:nth-child(1) > div > ul",
      "repository file checkboxes",
      this
    );
    saveBtn = new WebButton(
      '//*[@id="radix-:r3:"]/div[2]/button[2]',
      "save configuration button",
      this
    );
  
    // ─── Confirmation Modal ───────────────────────────────────────────
    confirmDialog = new WebElement(
      "div[role='dialog'] h2:text('Save Repository Configuration')",
      "confirm dialog",
      this
    );
    confirmSaveBtn = new WebButton(
      'button[aria-label="Confirm and save repository"]',
      "confirm save repository button",
      this
    );
    cancelSaveBtn = new WebButton(
      'button[aria-label="Cancel saving repository"]',
      "cancel save repository button",
      this
    );
  
    // ─── Actions ──────────────────────────────────────────────────────
    async isOpen(): Promise<boolean> {
      return await this.stepIndicator.isDisplayed();
    }
  
    async fillGitHubStep(owner: string, token: string, amountOfRepos:number): Promise<void> {
      await this.githubOwnerInput.sendText(owner);
      await this.githubTokenInput.sendText(token);
      await this.githubStepNextBtn.click();
     const result = await this.githubFoundRepositoriesCountText.getText();
     expect(result).toContain(`Found ${amountOfRepos} repositories`)
      await this.githubContinueBtn.click();
      await Wait.for(1000);
    }
  
    async selectRepository(repoName: string): Promise<void> {
      await this.repoDropdown.click();
      const option = this.repoOption(repoName);
      await option.click();
      await this.repoStepNextBtn.click();
      await Wait.for(1000);
    }

    
    async setNameAndClickSequence(displayName: string, selectorsInOrder: { selector: string, name: string }[]): Promise<void> {
      // Set the name
      await this.repoDisplayNameInput.sendText(displayName);
    
      // Click each selector in order
      for (const { selector, name } of selectorsInOrder) {
        const el = await this.browser.findElement(selector, name, this, WebButton);
        if (!el) {
          console.warn(`Element not found for: ${name}`);
          continue;
        }
    
        await el.click();
        await Wait.for(300); // slight delay between actions
      }
      await Wait.for(1000); // allow save to process
      await this.repoStepNextBtn.click();
      await Wait.for(300);
      await this.saveBtn.click();
      await Wait.for(5000); // allow save to process
    }
    
    
    
  
    async confirmSave(): Promise<void> {
      await this.confirmDialog.waitForDisplayed();
      await this.confirmSaveBtn.click();
      await Wait.for(500);
    }
  }