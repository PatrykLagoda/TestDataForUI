import { Log, Wait } from "../../../../src/common/index.js";
import { Device } from "../../../../src/mobile/device.js";
import { MobileButton, MobileElement, MobileLabel, MobileTextfield } from "../../../../src/mobile/index.js";
import { HomeScreen } from "../mobileObjects/index.js";

export class IOSHomeScreen extends HomeScreen{
    private settingsBtn = new MobileButton({predicateString: "label == 'Instellingen'"}, "Settings button", this);
    private searchBar = new MobileTextfield({ 
        android: {xpath: "//*[contains(@text,'Search Wikipedia')]"}, 
        ios: {predicateString: 'label == "Search Wikipedia"'}
    }, "Search bar", this);


    private topArticles = new MobileElement({
        android: "", 
        ios: "//XCUIElementTypeApplication[@name='Wikipedia']/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther[2]/XCUIElementTypeCollectionView"
    }, "Top article container", this);

    constructor(device: Device) {
        super(device);
    }
    
    async openSettings(){
        return await this.settingsBtn.tap();
    }

    async searchWikipedia(searchTerm: string) {
        await this.searchBar.tap();
        await this.searchScreen.searchBar.sendText(searchTerm);
    }

    async getTopArticles() {
        const articles = this.topArticles.findElements({
            android: "",
            ios: "//XCUIElementTypeCell"
        }, "article", this, MobileLabel);

        for (const article of await articles.getElements()) {
            Log.info("L:" + await article.getText())
        }
    }
}