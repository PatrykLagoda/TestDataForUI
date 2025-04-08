import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class DataParsoidService extends BaseWikipediaService {
    constructor() {
        super("data parsoid", "/page/data-parsoid");
    }

    async getParsoidMetadata(title: string, revision: string, tid: string): Promise<Response> {
        throw new Error("not implemented");
    }
}