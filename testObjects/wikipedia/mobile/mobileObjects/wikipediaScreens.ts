import { Device } from "../../../../src/mobile/index.js";
import { AndroidWikipediaScreens } from "../android/index.js";
import { IOSWikipediaScreens } from "../ios/index.js";

export class WikipediaScreens {
    static async init(): Promise<IOSWikipediaScreens | AndroidWikipediaScreens> {
        let device = await Device.getDevice();
        if (device.deviceConfig.platformName === "android") {
            return AndroidWikipediaScreens.init(device);
        } else {
            return IOSWikipediaScreens.init(device);
        }
    }
}