import { BasePostcodeService } from "../basePostcodeService.js";
import { Response } from "../../../src/rest/reponse.js";

export class RandomPostcodeService extends BasePostcodeService {
    constructor() {
        super("outcodes", "/random/postcodes")
    }

    async getRandomPostcode(): Promise<Response>{
        return await this.restClient.get().perform();
    }
}