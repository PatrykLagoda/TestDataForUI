import { Wait } from "../../../src/common/index.js";
import {
  Browser,
  WebButton,
  WebElement,
  WebElementArray,
  WebTextfield,
} from "../../../src/web/index.js";
import { BaseTestAutomationUIGeneratorPage } from "./baseTestAutomationUIGeneratorPage.js";
import { RepositoryModal } from "./repositoryModal.js"; // 👈 Import added

export class RepositoriesPage extends BaseTestAutomationUIGeneratorPage {
  public Modal: RepositoryModal; // 👈 Plugged-in modal object

  // Navigation Buttons
  private backToTestFlowsBtn = new WebButton(
    "/html/body/div/div[1]/div[1]/button",
    "back to test flows button",
    this
  );
  private homeBtn = new WebButton(
    "/html/body/div/div[1]/div[3]/div/a/button",
    "home button",
    this
  );
  private signOutBtn = new WebButton(
    "/html/body/div/div[1]/div[3]/div/button",
    "sign out button",
    this
  );

  // Repository UI Elements
  private repoListContainer = new WebElement(
    "/html/body/div/div[2]/div[1]/div/div[2]",
    "repository list container",
    this
  );
  private repoItems = new WebElementArray(
    ".repository-item",
    "repository list items",
    this
  );
  private repoDetailPanel = new WebElement(
    "/html/body/div/div[2]/div[2]/div",
    "repository detail panel",
    this
  );

  // Action Buttons
  private createRepoBtn = new WebButton(
    "/html/body/div/div[2]/div[1]/div/div[1]/div/button",
    "create repository button",
    this
  );
  private editRepoNameBtn = new WebButton(
    "/html/body/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/h2/button",
    "edit repository name button",
    this
  );
  private deleteRepoBtn = new WebButton(
    "button:text('Delete')",
    "delete repository button",
    this
  );

  // Modals
  private repoModal = new WebElement(`//*[@id="radix-:r0:"]`, "repository modal", this);
  private editNameModal = new WebElement("/html/body/div/div[3]/div", "edit name modal", this);
  private deleteConfirmModal = new WebElement(".modal#delete-confirm", "delete confirm modal", this);


  // Name Edit Modal Elements
  
  private editNameInput = new WebTextfield("/html/body/div/div[3]/div/form/div[1]/input", "change name field", this);

  private cancelNameChangeBtn = new WebButton("/html/body/div/div[3]/div/form/div[2]/button[1]","change name cancel", this);

  private saveNameChangeBtn = new WebButton("/html/body/div/div[3]/div/form/div[2]/button[2]","change name save",this);


  constructor(browser: Browser) {
    super(browser, "repository", "/repositories");
    this.Modal = new RepositoryModal(browser); // 👈 Initialized here
  }

 /**
   * Opens the modal for creating a new repository.
   * @returns {Promise<void>}
   */
 async openCreateRepositoryModal(): Promise<void> {
  await this.createRepoBtn.click();
  await Wait.for(500);
}

/**
 * Navigates back to the test flows page.
 * @returns {Promise<void>}
 */
async goBackToTestFlows(): Promise<void> {
  await this.backToTestFlowsBtn.click();
}

/**
 * Navigates to the home page.
 * @returns {Promise<void>}
 */
async goToHome(): Promise<void> {
  await this.homeBtn.click();
}

/**
 * Signs the user out of the application.
 * @returns {Promise<void>}
 */
async signOut(): Promise<void> {
  await this.signOutBtn.click();
}

/**
 * Opens the modal to edit a repository's name, inputs a new name, and saves it.
 * @returns {Promise<void>}
 */
async openEditNameModal(): Promise<void> {
  await this.editRepoNameBtn.click();
  await Wait.for(500);
  await this.isModalOpen("edit");
  await this.editNameInput.sendText("Login Flow 1");
  await this.saveNameChangeBtn.click();
  await Wait.for(5000);
}

/**
 * Opens the modal to confirm repository deletion.
 * @returns {Promise<void>}
 */
async openDeleteRepositoryModal(): Promise<void> {
  await this.deleteRepoBtn.click();
  await Wait.for(500);
}

/**
 * Selects a repository in the list by its visible text or title attribute.
 * @param {string} searchText - The name or title of the repository to select.
 * @returns {Promise<void>}
 */
async selectRepositoryByName(searchText: string): Promise<void> {
  const parentElement = new WebElement(`/html/body/div/div[2]/div[1]/div/div[3]/table/tbody`, "table", this);
  const childrenArray = await parentElement.findElements("*", "element", this, WebElement);
  const children = await childrenArray.getElements(); // Convert to array
  for (const child of children) {
    try {
      const text = (await child.getText())?.trim();
      const title = (await child.getAttribute("title"))?.trim();
      if (text === searchText || title === searchText) {
        await child.click();
        return;
      }
    } catch (err) {
      // Silently ignore error and continue
    }
  }
}

/**
 * Asserts that the repository detail panel is visible.
 * @returns {Promise<void>}
 */
async expectRepositoryDetailVisible(): Promise<void> {
  const isVisible = await this.repoDetailPanel.isDisplayed();
  expect(isVisible).toBe(true);
}

/**
 * Checks if a modal is currently open.
 * @param {"create" | "edit" | "delete"} modal - The type of modal to check.
 * @returns {Promise<boolean>} - True if the modal is displayed, false otherwise.
 */
async isModalOpen(modal: "create" | "edit" | "delete"): Promise<boolean> {
  switch (modal) {
    case "create":
      return await this.repoModal.isDisplayed();
    case "edit":
      return await this.editNameModal.isDisplayed();
    case "delete":
      return await this.deleteConfirmModal.isDisplayed();
    default:
      return false;
  }
}
}