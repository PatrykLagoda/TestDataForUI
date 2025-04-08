import { DataParsoidService, HtmlService, LintService, PdfService, SegmentsService, TitleService, WikitextService } from "./index.js";

export class PageContentServices {
    DataParsoid: DataParsoidService;
    Html: HtmlService;
    Lint: LintService;
    PDF: PdfService;
    Segment: SegmentsService;
    Title: TitleService;
    Wikitext: WikitextService;

    constructor() {
        this.DataParsoid = new DataParsoidService();
        this.Html = new HtmlService();
        this.Lint = new LintService();
        this.PDF = new PdfService();
        this.Segment = new SegmentsService();
        this.Title = new TitleService();
        this.Wikitext = new WikitextService();
    }
}