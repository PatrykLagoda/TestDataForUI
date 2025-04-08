import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class CssService extends BaseWikipediaService {
    constructor() {
        super("css", "mobile/css/mobile");
    }

    async getCss(type: string): Promise<Response> {
        throw new Error("not implemented");
    }
}