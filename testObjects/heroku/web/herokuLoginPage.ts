import { Log } from "../../../src/common/index.js";
import { Browser, WebButton, WebForm, WebTextfield } from "../../../src/web/index.js";
import { BaseHerokuPage } from "../baseObjects/index.js";

export class HerokuLoginPage extends BaseHerokuPage {
    private usernameTxt = new WebTextfield("#username", "Username textfield", this);
    private passwordTxt = new WebTextfield("#password", "Password textfield", this);
    private form = new WebForm("#login", "Login form", this);
    private loginBtn = this.form.findElement("button", "Login button", this, WebButton);

    constructor(browser : Browser){
        super("Login Page", "/login", browser);
    }

    async fillInUsername(username : string){
        await this.usernameTxt.clear();
        await this.usernameTxt.sendText(username);
    }

    async clickLoginButton() {
        await this.loginBtn.click();
    }

    async login(username : string, password : string){
        await this.usernameTxt.sendText(username);
        await this.passwordTxt.sendText(password);
        await this.loginBtn.click();
    }

    async getFontFamilyOfLoginButton(){
        Log.info(await this.loginBtn.getCSSProperty("font-family"));
    }
}