import { Log } from "../../../src/common/index.js";
import { WikipediaServices } from "../../../testObjects/wikipedia/rest/index.js";
import { RevisionMetadataResponse } from "../../../testObjects/wikipedia/rest/models/response/revisionMetadataResponse.js";

describe("C12194 - Wikipedia test - REST", () => {
    let services: WikipediaServices;
    const searchTerm = "Software_testing";
    const revision = "1171690010";

    before("Init services", async () => {
        services = WikipediaServices.init();
    })
    
    it("Get revision metadata", async () => {
        const response = await services.Page.Title.getRevisionMetadata(searchTerm);
        const revisionMetadata = response.getBodyAs<RevisionMetadataResponse>();
        expect(response.statusCode).toBe(200);
        expect(revisionMetadata.items[0].title).toBe(searchTerm);
    });

    it("Search wikipedia", async () => {
        const response = await services.Page.Html.getHtml(searchTerm);
        expect(response.statusCode).toBe(200);
        expect(response.bodyAsText).toContain(searchTerm);
    });
});