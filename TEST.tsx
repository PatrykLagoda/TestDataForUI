import { Wait } from '../../../src/common/index.js';
import { Browser, WebButton, WebElementArray, WebLabel, WebTextfield } from '../../../src/web/index.js';
import BaseWikipediaPage from './baseWikipediaPage.js';

const PAGE_PATH = '/Main_Page';

/**
 * Main Wikipedia page
 */
class MainPage extends BaseWikipediaPage {
    constructor(browser: Browser) {
        super(browser, 'main', PAGE_PATH);
    }

    // Private elements using class field style

    /**
     * @returns {WebButton} Search bar icon button
     */
    get #searchBarIconButton() {
        return new WebButton('.mw-ui-icon-search', 'search button', this);
    }

    /**
     * @returns {WebTextfield} Main search bar
     */
    get #searchBar() {
        return new WebTextfield('#searchInput', 'search bar', this);
    }

    /**
     * @returns {WebButton} Search confirmation button
     */
    get #searchButton() {
        return new WebButton('.cdx-search-input__end-button', 'search', this);
    }

    /**
     * @returns {WebElementArray<WebLabel>} List of top search results
     */
    get #topSearchResults() {
        return new WebElementArray<WebLabel>('.cdx-search-result-title', 'search result', this);
    }

    /**
     * Click the search confirmation button
     */
    async clickSearch() {
        await this.#searchButton.click();
    }

    /**
     * Get top search results as an array of strings
     *
     * @returns {Promise<string[]>}
     */
    async getTopResultsAsStrings() {
        const elements = await this.#topSearchResults.getElements();
        return Promise.all(elements.map(el => el.getText()));
    }

    /**
     * Enter a search term into the search bar
     *
     * @param {string} searchTerm
     */
    async enterSearchTerm(searchTerm: string) {
        try {
            await Wait.until(async () => {
                return (await this.#searchBarIconButton.isDisplayed(true)) === true;
            }, '', 200);

            this.#searchBarIconButton.click();
        } catch {}

        await this.#searchBar.sendText(searchTerm);
        await Wait.for(500);
    }
}

export default MainPage;
