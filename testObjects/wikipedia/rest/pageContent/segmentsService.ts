import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class SegmentsService extends BaseWikipediaService {
    constructor() {
        super("segements", "/page/segments");
    }

    async getSegment(title: string): Promise<Response> {
        throw new Error("not implemented");
    }
}