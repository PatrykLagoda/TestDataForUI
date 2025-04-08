import { Browser } from "../../../src/web/index.js";
import { BaseHerokuPage } from "../baseObjects/index.js";

export class HerokuSecureAreaPage extends BaseHerokuPage {
    constructor(browser : Browser) {
        super("Secure Area Page", "/secure", browser);
    }
}