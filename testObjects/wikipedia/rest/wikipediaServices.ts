import { CitationService, FeedService, MathService, MobileService, PageContentServices } from "./index.js";
import { TransformServices } from "./transforms/transformServices.js";


export class WikipediaServices {
    Citation: CitationService;
    Feed: FeedService;
    Math: MathService;
    Mobile: MobileService;
    Page: PageContentServices;
    Transforms: TransformServices;

    private constructor() {
        this.Citation = new CitationService();
        this.Feed = new FeedService();
        this.Math = new MathService();
        this.Mobile = new MobileService();
        this.Page = new PageContentServices();
        this.Transforms = new TransformServices();
    }

    static init(): WikipediaServices {
        return new WikipediaServices();
    }
}