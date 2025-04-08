import { Log } from "../../../src/common/index.js";
import { inspect } from "node:util";
import { ErrorMessage } from "../models/index.js";
import { BaseDummyjsonServiceObject } from "./baseDummyjsonServiceObject.js";
import { User } from "../../../config/index.js";
import { Postcode } from "../models/response/postcodeModel.js";

export class UsersService extends BaseDummyjsonServiceObject {
    constructor(user: User) {
        super("/auth/users", "user service", user);
    }

    async getUsers() {
        const response = this.restClient.put().usingJSONBody({users: "Sepp"}).usingDefaultHeaders().authenticated().perform();
        expect((await response).statusCode).toBe(400);
        expect((await response).getBodyAs<Postcode>().country).toBe("England")
        await this.restClient.get()
        /*let lookup: BulkLookup = {
            "postcodes": [
                "OX49 5NU", "M32 0JG", "NE30 1DP"
            ]
        }*/
        return await this.restClient.get().usingDefaultHeaders().authenticated().perform();
        //let test = result.getBodyAs<ErrorMessage>();
        //Log.info("T" + inspect(test, true, 10))
        //Log.error(test.message)
        //Log.info(inspect(await result.json()));
    }
}