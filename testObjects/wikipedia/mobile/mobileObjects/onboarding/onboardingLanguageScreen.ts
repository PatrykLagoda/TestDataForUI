import { Device } from "../../../../../src/mobile/index.js";
import { MobileButton, MobileTextfield } from "../../../../../src/mobile/elements/index.js";
import { BaseScreenObject } from "../../../../baseObjects/index.js";
import { Wait } from "../../../../../src/common/index.js";

export class OnboardingLanguageScreen extends BaseScreenObject {

    private btnSkip = new MobileTextfield(
        {
            android: {
                id: "org.wikipedia:id/fragment_onboarding_skip_button"
            },
            ios: {
                xpath: "//XCUIElementTypeButton[@name='Skip']"
            }
        }
        , "Search bar", this);

    private searchBarTxt = new MobileButton(
        {android: {id: "search"}, ios: {id: "searchIos"}}, "search bar", this
    );

    constructor(device: Device) {
        super("Onboarding Language Screen", device);
    }

    async skipOnboarding() {
        try {
            await Wait.until(async() => {
                return await this.btnSkip.isDisplayed() === true
            }, "", 500);
            await this.btnSkip.tap(false);
        } catch {
            
        }
    }
}