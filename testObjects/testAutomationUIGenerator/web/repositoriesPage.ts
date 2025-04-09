import { Wait } from "../../../src/common/index.js";
import {
  Browser,
  WebButton,
  WebElement,
  WebElementArray,
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
    "button:text('Edit')",
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
  private editNameModal = new WebElement(".modal#edit-name", "edit name modal", this);
  private deleteConfirmModal = new WebElement(".modal#delete-confirm", "delete confirm modal", this);

  constructor(browser: Browser) {
    super(browser, "repository", "/repositories");
    this.Modal = new RepositoryModal(browser); // 👈 Initialized here
  }

  async openCreateRepositoryModal(): Promise<void> {
    await this.createRepoBtn.click();
    await Wait.for(500);
  }

  async goBackToTestFlows(): Promise<void> {
    await this.backToTestFlowsBtn.click();
  }

  async goToHome(): Promise<void> {
    await this.homeBtn.click();
  }

  async signOut(): Promise<void> {
    await this.signOutBtn.click();
  }

  async openEditNameModal(): Promise<void> {
    await this.editRepoNameBtn.click();
    await Wait.for(500);
  }

  async openDeleteRepositoryModal(): Promise<void> {
    await this.deleteRepoBtn.click();
    await Wait.for(500);
  }

  async selectRepositoryByIndex(index: number): Promise<void> {
    const items = await this.repoItems.getElements();
    if (index < items.length) {
      await items[index].click();
    } else {
      throw new Error("Repository index out of range.");
    }
  }

  async expectRepositoryDetailVisible(): Promise<void> {
    const isVisible = await this.repoDetailPanel.isDisplayed();
    expect(isVisible).toBe(true);
  }

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
