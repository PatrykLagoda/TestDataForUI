

import { Device, MobileButton, MobileLabel } from "../../../../src/mobile/index.js";
import { BaseScreenObject } from "../../../baseObjects/index.js";


export class SettingsScreen extends BaseScreenObject {
    private backBtn = new MobileButton({ 
        android: '//android.widget.ImageButton[@content-desc="Navigate up"]', 
        ios: {
            predicateString: 'label == "Sluiten"'
        }
    }, "back button", this);

    private titleLbl = new MobileLabel({
        android: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView',
        ios: {
            predicateString: 'label == "Instellingen" AND name == "Instellingen" AND value == "Instellingen"'
        }
    }, "title label", this);

    constructor(device: Device) {
        super("settings screen", device);
    }

    async closeSettings() {
        this.backBtn.tap();
    }

    async getTitle(): Promise<string> {
        return await this.titleLbl.getText();
    }
}