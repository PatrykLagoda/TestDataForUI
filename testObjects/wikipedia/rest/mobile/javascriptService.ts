import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class JavascriptService extends BaseWikipediaService {
    constructor() {
        super("javascript", "/data/javascript/mobile");
    }

    async getJavascript(type: string): Promise<Response> {
        throw new Error("not implemented");
    }
}