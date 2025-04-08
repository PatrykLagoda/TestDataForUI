import { OutcodeService, PostcodesService, RandomPostcodeService, TerminatedPostcodesService } from "./index.js";

export class PostcodesServices {
    outcodes: OutcodeService;
    postcodes: PostcodesService;
    random: RandomPostcodeService;
    terminatedPostcode: TerminatedPostcodesService;

    private constructor() {
        this.outcodes = new OutcodeService();
        this.postcodes = new PostcodesService();
        this.random = new RandomPostcodeService();
        this.terminatedPostcode = new TerminatedPostcodesService();
    }

    static init() {
        return new PostcodesServices();
    }
}