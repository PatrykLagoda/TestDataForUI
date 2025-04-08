import { Log } from "../../../../src/common/index.js";
import { Device, MobileElement, MobileLabel } from "../../../../src/mobile/index.js";
import { MenuBar } from "./menuBar.js";
import { ScreenWithMenu } from "./screenWithMenu.js";
import { SearchScreen } from "./searchScreen.js";

export class HomeScreen extends ScreenWithMenu {
    protected searchScreen: SearchScreen;

    constructor(device: Device) {
        super("Homescreen", device);
        this.searchScreen = new SearchScreen(device);
    }

    openSettings(){}

    searchWikipedia(searchTerm: string) {}
}