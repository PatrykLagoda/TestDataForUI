import { Log, Wait } from "../../../src/common/index.js";
import { AndroidWikipediaScreens, IOSWikipediaScreens, WikipediaScreens } from "../../../testObjects/wikipedia/mobile/index.js";
import { inspect } from "node:util";

describe("C12192 - Wikipedia test - App", () => {
    let screens: IOSWikipediaScreens | AndroidWikipediaScreens;
    const searchTerm = "Software testing";

    before("Init screens", async () => {
        screens = await WikipediaScreens.init();
        await screens.OnboardingLanguage.skipOnboarding();
    });

    it("Search wikipedia", async () => {
        await screens.Home.searchWikipedia(searchTerm);
        const results = await screens.Results.getTopResultsAsStrings();
        expect(results).toContain(searchTerm);
    });

    it(`Select ${searchTerm}`,async() => {
        await screens.Results.selectResult(searchTerm);
        const resultTitle = await screens.Result.getTitle();
        expect(resultTitle).toBe(searchTerm);
        const resultBody = await screens.Result.getBody();
        expect(resultBody).toContain(searchTerm);
    });
});