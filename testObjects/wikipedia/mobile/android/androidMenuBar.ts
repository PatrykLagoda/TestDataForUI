import { Device, MobileButton, MobileLabel } from "../../../../src/mobile/index.js";
import { MenuBar } from "../mobileObjects/index.js";
import { AndroidMoreMenu } from "./androidMoreMenu.js";

export class AndroidMenuBar extends MenuBar {
    moreMenu: AndroidMoreMenu;
    moreBtn = new MobileButton({id: "org.wikipedia:id/menu_icon"},"More button", this);
    editsBtn = new MobileButton({ios: {accessibilityId: ""}, android: {xpath: ""}}, "edit bu", this);

    constructor(device: Device) {
        super("menu bar", device);
        this.moreMenu = new AndroidMoreMenu(device);
    }
}