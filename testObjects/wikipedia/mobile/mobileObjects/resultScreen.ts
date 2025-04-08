
import { Wait } from "../../../../src/common/index.js";
import { OCRUtil } from "../../../../src/common/utils/ocr/ocrUtil.js";
import { Device, MobileLabel } from "../../../../src/mobile/index.js";
import { ScreenWithMenu } from "./index.js";

export class ResultScreen extends ScreenWithMenu {
    private titleLbl = new MobileLabel({
        android: {xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.widget.TextView[1]"},
        ios: "//XCUIElementTypeApplication[@name='Wikipedia']/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]"
    }, "Search result title", this);

    private content = new MobileLabel({
        android: {xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.TextView[1]"},
        ios: "//XCUIElementTypeApplication[@name='Wikipedia']/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]"
    }, "search result content", this);
    
    constructor(device: Device) {
        super("result screen", device);
    }

    async getBody(): Promise<string> {
        await Wait.for(500);
        if (this.device.deviceConfig.platformName === "ios") {
            return await OCRUtil.getVisibleText(await this.takeScreenshot(null, "bodyResult.png"), await this.content.getCoordinates());
        }
        return await this.content.getText();
    }

    async getTitle(): Promise<string> {
        if (this.device.deviceConfig.platformName === "ios") {
            return await OCRUtil.getVisibleText(await this.takeScreenshot(null, "titleResult.png"), await this.titleLbl.getCoordinates());
        }
        return await this.titleLbl.getText();
    }
}
