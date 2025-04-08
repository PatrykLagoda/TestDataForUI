import { Wait } from "../../../../src/common/index.js";
import { Device } from "../../../../src/mobile/device.js";
import { MobileElementArray } from "../../../../src/mobile/index.js";
import { BaseScreenObject } from "../../../baseObjects/index.js";

export class ResultsScreen extends BaseScreenObject {
    private resultTitleLbls = new MobileElementArray({
        android: {id: "org.wikipedia:id/page_list_item_title"},
        ios: {xpath: "//XCUIElementTypeCell//XCUIElementTypeStaticText[@name][1]"}
    }, "search results ", this);

    constructor(device: Device) {
        super("Results Screen", device);
    }

    async getTopResultsAsStrings(): Promise<string[]> {
        await Wait.for(500);
        let resultsAsString: string[] = [];
        for (const resultTitleLbl of (await this.resultTitleLbls.getElements())) {
            resultsAsString.push(await resultTitleLbl.getText(false));
        }
        return resultsAsString;
    }

    async selectResult(searchTerm: string) {
        let resultsAsString: string[] = [];
        for (const resultTitleLbl of (await this.resultTitleLbls.getElements())) {
            if (await resultTitleLbl.getText(false) === searchTerm) {
                await resultTitleLbl.tap();
                return;
            }
        }
        return resultsAsString;
    }
}
