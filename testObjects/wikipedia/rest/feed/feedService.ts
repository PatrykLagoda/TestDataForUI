import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class FeedService extends BaseWikipediaService {
    constructor() {
        super("Feed", "/feed")
    }

    async featured(year: string, month: string, day: string): Promise<Response> {
        throw new Error("not implemented");
    }

    async announcements(): Promise<Response> {
        throw new Error("not implemented");
    }

    async onThisDay(type: string, month: string, day: string): Promise<Response> {
        throw new Error("not implemented");
    }
}