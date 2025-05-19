import { Wait } from "../../../src/common/index.js";
import { Browser, WebButton, WebElementArray, WebLabel, WebTextfield } from "../../../src/web/index.js";
import { BaseWikipediaPage } from "./baseWikipediaPage.js";

export class MainPage extends BaseWikipediaPage {
    private searchBarBtn = new WebButton(".mw-ui-icon-search", "search button", this);
    private searchBar = new WebTextfield("#searchInput", "search bar", this);
    private searchBtn = new WebButton(".cdx-search-input__end-button", "search", this);
    private topSearchOptionLabels = new WebElementArray<WebLabel>(".cdx-search-result-title", "search result", this);
    
    constructor(browser: Browser) {
        super(browser, "main", "/Main_Page");
    }

    /**
     * Clicks the search button to submit the current input in the search bar.
     *
     * @returns {Promise<void>}
     */
    async clickSearch() {
        await this.searchBtn.click();
    }

    /**
     * Retrieves the visible top search result labels and returns them as an array of strings.
     *
     * @returns {Promise<string[]>} Array of text from the top search results.
     */
    async getTopResultsAsStrings(): Promise<string[]> {
        let results: string[] = [];
        for (const topSearchOptionLabel of (await this.topSearchOptionLabels.getElements())) {
            results.push(await topSearchOptionLabel.getText());
        }
        return results;
    }

    /**
     * Enters a search term into the search bar.
     * If the search bar is initially hidden, clicks the icon to reveal it.
     * Waits briefly after entering the term to allow for dynamic suggestions or UI response.
     *
     * @param {string} searchTerm - The text to input into the search bar.
     * @returns {Promise<void>}
     */
    async enterSearchTerm(searchTerm: string) {
        try {
            await Wait.until(async () => {
                return await this.searchBarBtn.isDisplayed(true) === true
            }, "", 200);
            this.searchBarBtn.click();
        } catch {}
        await this.searchBar.sendText(searchTerm);
        await Wait.for(500);
    }
}
