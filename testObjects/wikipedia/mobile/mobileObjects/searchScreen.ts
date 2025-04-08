import { Device, MobileTextfield } from "../../../../src/mobile/index.js";
import { BaseScreenObject } from "../../../baseObjects/index.js";

export class SearchScreen extends BaseScreenObject { 
    searchBar = new MobileTextfield({
        ios: {
            predicateString: 'label == "Search Wikipedia"'
        }, 
        android: {
            id: "org.wikipedia:id/search_src_text"
        }
    }, "Search bar", this);


    constructor(device: Device) {
        super("Search screen", device);
    }

    async searchWikipedia(searchTerm: string) {
        await this.searchBar.sendText(searchTerm + "\n");
    }
}