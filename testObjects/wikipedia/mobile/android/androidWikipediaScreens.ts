import { Device } from "../../../../src/mobile/index.js";
import { OnboardingLanguageScreen, ResultScreen, ResultsScreen, SearchScreen, SettingsScreen } from "../mobileObjects/index.js";
import { AndroidHomeScreen } from "./androidHomeScreen.js";

export class AndroidWikipediaScreens {
    OnboardingLanguage: OnboardingLanguageScreen;
    Home: AndroidHomeScreen;
    Settings: SettingsScreen;
    Search: SearchScreen;
    Results: ResultsScreen;
    Result: ResultScreen;

    private constructor(device: Device) {
        this.OnboardingLanguage = new OnboardingLanguageScreen(device);
        this.Home = new AndroidHomeScreen(device);
        this.Settings = new SettingsScreen(device);
        this.Search = new SearchScreen(device);
        this.Results = new ResultsScreen(device);
        this.Result = new ResultScreen(device);
    }

    static async init(device: Device) {
        return new AndroidWikipediaScreens(device);
    }
}
