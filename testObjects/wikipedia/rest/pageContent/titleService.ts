import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class TitleService extends BaseWikipediaService {
    constructor() {
        super("title", "/page/title");
    }

    getRevisionMetadata(title: string, revision: string = ""): Promise<Response> {
        let urlParameters = "";
        if (revision) {
            urlParameters = `/${title}/${revision}`;
        } else {
            urlParameters = `/${title}`;
        }
        return this.restClient.get().addToUrl(urlParameters).perform();
    }
}