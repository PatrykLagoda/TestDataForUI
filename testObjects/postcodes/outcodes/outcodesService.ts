import { BasePostcodeService } from "../basePostcodeService.js";
import { Response } from "../../../src/rest/reponse.js";

export class OutcodeService extends BasePostcodeService {
    constructor() {
        super("outcodes", "/outcodes")
    }

    async lookupOutwardCode(outcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${outcode}`).perform();
    }

    async nearestOutwardCode(outcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${outcode}/nearest`).perform();
    }
}