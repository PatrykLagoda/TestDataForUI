import { Device } from "../../../../src/mobile/device.js";
import { BaseScreenObject } from "../../../baseObjects/index.js";
import { MenuBar } from "./menuBar.js";

export class ScreenWithMenu extends BaseScreenObject {
    Menu: MenuBar;

    constructor(screenName: string, device: Device) {
        super(screenName, device);
        if (device.deviceConfig.platformName === "android") {
            //this.Menu = new Andr
        }
    }
}