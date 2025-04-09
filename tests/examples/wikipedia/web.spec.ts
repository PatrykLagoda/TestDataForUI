import { WikipediaPages } from "../../../testObjects/wikipedia/web/index.js";

describe("C12193 - Wikipedia test - Website", () => {
    let pages: WikipediaPages;
    const searchTerm = "Software testing";

    before("Init pages & navigate", async () => {
        pages = await WikipediaPages.init();
        await pages.Main.navigateTo();
    });

    it("Search wikipedia", async () => {
        await pages.Main.enterSearchTerm(searchTerm);
        const results = await pages.Main.getTopResultsAsStrings();
        expect(results).toContain(searchTerm);
        await pages.Main.clickSearch();
    });

    it(`Select ${searchTerm}`,async() => {
        const resultTitle = await pages.Result.getTitle();
        expect(resultTitle).toBe(searchTerm);
        const resultBody = await pages.Result.getBody();
        expect(resultBody).toContain(searchTerm);
    });
});