import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class LintService extends BaseWikipediaService {
    constructor() {
        super("lint", "/lint");
    }

    async getLinterrorsForPage(title: string): Promise<Response> {
        throw new Error("not implemented");
    }
}