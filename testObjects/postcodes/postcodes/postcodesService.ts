import { BasePostcodeService } from "../basePostcodeService.js";
import { Response } from "../../../src/rest/reponse.js";
import { BulkLookupModel, BulkReverseGeocodingRequestModel } from "../models/index.js";
import { PostcodeResponseModel } from "../models/response/index.js";

export class PostcodesService extends BasePostcodeService {
    constructor() {
        super("postcodes", "/postcodes")
    }

    async lookup(postcode: string): Promise<Response> {
        return await this.restClient.get().addToUrl(`/${postcode}`).perform();
    }

    async bulkLookup(bulkLookupModel: BulkLookupModel): Promise<Response> {
        return await this.restClient.post().usingDefaultHeaders().usingJSONBody(bulkLookupModel).perform();
        //return await this.restClient.post().usingJSONBody(bulkLookupModel).perform();
    }

    async lookupNearestPostcode(latitude: string, longitude: string): Promise<Response>{
        return await this.restClient.get().addURLParameter("lon", longitude).addURLParameter("lat", latitude).perform();
    }

    async bulkReverseGeocoding(bulkReverseGeocodingRequestModel: BulkReverseGeocodingRequestModel): Promise<Response>{
        return await this.restClient.post().usingJSONBody(bulkReverseGeocodingRequestModel).perform();
    }

    async validatePostcode(postcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${postcode}/validate`).perform();
    }

    async getNearestPostcode(postcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${postcode}/nearest`).perform();
    }

    async autocompletPartialPostcode(postcode: string): Promise<Response>{
        return await this.restClient.get().addToUrl(`/${postcode}/autocomplete`).perform();
    }

    async queryPostcode(postcode: string): Promise<Response>{
        return await this.restClient.get().addURLParameter("q", postcode).perform();
    }
}