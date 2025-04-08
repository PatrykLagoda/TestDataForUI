import { BasePostcodeService } from "../basePostcodeService.js";
import { Response } from "../../../src/rest/reponse.js";

export class TerminatedPostcodesService extends BasePostcodeService {
    constructor() {
        super("terminated postcodes", "/terminated_postcodes")
    }

    async lookupTerminatedPostcode(postcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${postcode}`).perform();
    }
}