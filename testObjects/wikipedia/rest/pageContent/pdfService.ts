import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class PdfService extends BaseWikipediaService {
    constructor() {
        super("pdf", "/page/pdf");
    }

    async getPageAsPdf(title: string, format: string = "", type: string = ""): Promise<Response> {
        throw new Error("not implemented");
    }
}