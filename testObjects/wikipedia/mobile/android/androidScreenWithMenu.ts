import { Device } from "../../../../src/mobile/device.js";
import { BaseScreenObject } from "../../../baseObjects/index.js";
import { AndroidMenuBar } from "./androidMenuBar.js";

export class AndroidScreenWithMenu extends BaseScreenObject {
    Menu: AndroidMenuBar;

    constructor(screenName: string, device: Device) {
        super(screenName, device);
        this.Menu = new AndroidMenuBar(device);
    }
}