import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class WordService extends BaseWikipediaService {
    constructor() {
        super("word", "/transform/word/from/");
    }

    async transformFrom(): Promise<Response> {
        throw new Error("not implemented");
    }
}