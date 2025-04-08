import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class HtmlService extends BaseWikipediaService {
    constructor() {
        super("page html", "/page/html");
    }

    async getHtml(title: string, revision: string = ""): Promise<Response> {
        return this.restClient.get().addToUrl(`/${title}`).perform();
    }

    async saveRevision(title: string): Promise<Response> {
        throw new Error("not implemented");
    }
}