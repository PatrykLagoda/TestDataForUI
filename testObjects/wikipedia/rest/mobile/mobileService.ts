import { CssService, JavascriptService, MobileSectionsService } from "./index.js";

export class MobileService {
    CSS: CssService;
    Javascript: JavascriptService;
    Sections: MobileSectionsService;

    constructor(){
        this.CSS = new CssService();
        this.Javascript = new JavascriptService();
        this.Sections = new MobileSectionsService();
    }
}