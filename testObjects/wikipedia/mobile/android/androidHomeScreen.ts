import { Log } from "../../../../src/common/index.js";
import { Device } from "../../../../src/mobile/device.js";
import { MobileElement, MobileLabel, MobileTextfield } from "../../../../src/mobile/index.js";
import { HomeScreen, SearchScreen } from "../mobileObjects/index.js";
import { AndroidScreenWithMenu } from "./androidScreenWithMenu.js";

export class AndroidHomeScreen extends AndroidScreenWithMenu {
    private searchBar = new MobileTextfield(
        "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/androidx.cardview.widget.CardView/android.widget.TextView",
        "search bar", this);
    private topArticles = new MobileElement({
            android: "", 
            ios: "//XCUIElementTypeApplication[@name='Wikipedia']/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther[2]/XCUIElementTypeCollectionView"
        }, "Top article container", this);
    private SearchScreen: SearchScreen;

    constructor(device: Device) {
        super("Home", device);
        this.SearchScreen = new SearchScreen(device);
    }
    
    async openSettings(){
        await this.Menu.moreBtn.tap();
        await this.Menu.moreMenu.settingsBtn.tap();
    }

    async searchWikipedia(searchTerm: string) {
        await this.searchBar.tap();
        await this.SearchScreen.searchWikipedia(searchTerm);
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