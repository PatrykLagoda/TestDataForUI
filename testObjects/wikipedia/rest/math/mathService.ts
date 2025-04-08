import { BaseWikipediaService } from "../baseWikipediaService.js";
import { Response } from "../../../../src/rest/reponse.js";

export class MathService extends BaseWikipediaService {
    constructor() {
        super("math", "/media/math")
    }

    async check(type: string): Promise<Response> {
        throw new Error("not implemented");
    }

    async formula(hash: string): Promise<Response> {
        throw new Error("not implemented");
    }

    async render(format: string, hash: string): Promise<Response> {
        throw new Error("not implemented");
    }
}