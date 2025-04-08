import { BaseScreenObject, Device, MobileButton } from "../../../../src/mobile/index.js";

export class AndroidMoreMenu extends BaseScreenObject{
    settingsBtn = new MobileButton(
        {xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView"},
        "Settings option",
        this
    );

    constructor(device: Device) {
        super("more menu", device)
    }
}