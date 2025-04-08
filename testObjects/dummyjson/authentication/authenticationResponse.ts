import { BaseModel } from "../../../src/rest/index.js";

export class AuthenicationResponse extends BaseModel {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}