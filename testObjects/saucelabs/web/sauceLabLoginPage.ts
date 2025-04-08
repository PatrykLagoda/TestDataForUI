import { Browser, WebButton, WebLabel, WebTextfield } from "../../../src/web/index.js";
import { BaseSauceLabPage } from "../index.js";

export class SauceLabLoginPage extends BaseSauceLabPage{
    usernameTxt = new WebTextfield("#user-name", "username textfield", this);
    passwordTxt = new WebTextfield("#password", "password textfield", this);
    loginBtn = new WebButton("#login-button", "login button", this);
    errorMsg = new WebLabel("h3", "Error message", this);

    constructor(browser : Browser){
        super("Login Page", "/", browser);
    }

    async fillInUsername(username : string) {
        await this.usernameTxt.sendText(username);
    };

    async fillInPassword(password : string) {
        await this.passwordTxt.sendText(password);
    }

    async clickLoginButton() {
        await this.loginBtn.click();
    }

    async login(username, password) {
        await this.fillInUsername(username);
        await this.fillInPassword(password);
        await this.clickLoginButton();
    }

    async getErrorMesssage() : Promise<string> {
        return await this.errorMsg.getText();
    }
}