import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class WikitextService extends BaseWikipediaService {
    constructor() {
        super("wikitext", "/page/wikitext");
    }

    async saveRevision(): Promise<Response> {
        throw new Error("not implemented");
    }
}