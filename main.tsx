import { Wait } from '../../../src/common/index.js';
import { WebButton, WebTextfield, WebElementArray, WebLabel } from '../../../src/web/index.js';
import { DEFAULT_TIMEOUT } from '../configs/e2eConstants';
import BaseWikipediaPage from './baseWikipediaPage.js';

const SCREEN_SELECTOR = '#searchInput';

class MainPage extends BaseWikipediaPage {
    constructor() {
        super(null, 'main', '/Main_Page'); // Adjust if 'browser' is required
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    get #searchBarIconButton() {
        return new WebButton('.mw-ui-icon-search', 'search button', this);
    }

    get #searchBar() {
        return new WebTextfield('#searchInput', 'search bar', this);
    }

    get #searchButton() {
        return new WebButton('.cdx-search-input__end-button', 'search', this);
    }

    get #topSearchResults() {
        return new WebElementArray<WebLabel>('.cdx-search-result-title', 'search result', this);
    }

    /**
     * Enter a term in the search bar and optionally trigger the search
     *
     * @param {string} searchTerm
     */
    async enterSearchTerm(searchTerm) {
        try {
            await Wait.until(async () => {
                return (await this.#searchBarIconButton.isDisplayed(true)) === true;
            }, '', 200);

            this.#searchBarIconButton.click();
        } catch {}

        await this.#searchBar.sendText(searchTerm);
        await Wait.for(500);
    }

    /**
     * Click the search submit button
     */
    async clickSearch() {
        await this.#searchButton.click();
    }

    /**
     * Get an array of strings for the top search result titles
     *
     * @returns {Promise<string[]>}
     */
    async getTopResultsAsStrings() {
        const elements = await this.#topSearchResults.getElements();
        return Promise.all(elements.map(el => el.getText()));
    }
}

export default new MainPage();
