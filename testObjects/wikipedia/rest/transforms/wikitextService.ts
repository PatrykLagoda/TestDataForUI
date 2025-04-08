import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class WikiTextService extends BaseWikipediaService {
    constructor() {
        super("wikitext", "/tranform/wikitext/to/");
    }

    async transformToHtml(): Promise<Response> {
        throw new Error("not implemented");
    }

    async transformToLint(): Promise<Response> {
        throw new Error("not implemented");
    }

    async transformToMobile(): Promise<Response> {
        throw new Error("not implemented");
    }
}