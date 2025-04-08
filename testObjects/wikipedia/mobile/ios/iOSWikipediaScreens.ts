import { Device } from "../../../../src/mobile/index.js";
import { IOSHomeScreen, OnboardingLanguageScreen, ResultScreen, ResultsScreen, SearchScreen, SettingsScreen } from "../index.js";

export class IOSWikipediaScreens {
    OnboardingLanguage: OnboardingLanguageScreen;
    Home: IOSHomeScreen;
    Settings: SettingsScreen;
    Search: SearchScreen;
    Results: ResultsScreen;
    Result: ResultScreen;

    private constructor(device: Device) {
        this.OnboardingLanguage = new OnboardingLanguageScreen(device);
        this.Home = new IOSHomeScreen(device);
        this.Settings = new SettingsScreen(device);
        this.Search = new SearchScreen(device);
        this.Results = new ResultsScreen(device);
        this.Result = new ResultScreen(device);
    }

    static init(device: Device) {
        return new IOSWikipediaScreens(device);
    }
}