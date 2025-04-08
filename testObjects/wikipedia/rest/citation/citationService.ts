import { Response } from "../../../../src/rest/reponse.js";
import { BaseWikipediaService } from "../baseWikipediaService.js";

export class CitationService extends BaseWikipediaService {
    constructor() {
        super("Citations", "/data/citation")
    }

    async getCitation(format: string, query: string): Promise<Response> {
        throw new Error("not implemented");
    }
}