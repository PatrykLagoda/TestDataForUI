import { WikitextService, WordService } from "../index.js";

export class TransformServices {
    WikiText: WikitextService;
    Word: WordService;

    constructor() {
        this.WikiText = new WikitextService();
        this.Word = new WordService();
    }
}