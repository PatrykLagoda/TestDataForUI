import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class MobileSectionsService extends BaseWikipediaService {
    constructor() {
        super("mobile sections", "/page/mobile-sections");
    }

    async getMobileSection(title: string, revision: string = ""): Promise<Response> {
        throw new Error("not implemented");
    }

    async getMobileSectionLead(title: string, revision: string = ""): Promise<Response> {
        throw new Error("not implemented");
    }

    async getMobileSectionRemaining(title: string, revision: string = ""): Promise<Response> {
        throw new Error("not implemented");
    }
}