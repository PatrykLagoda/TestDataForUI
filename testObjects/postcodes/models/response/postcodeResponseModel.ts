import { BaseModel } from "../../../../src/rest/baseModel.js"
import { Postcode } from "../base/index.js"

export interface PostcodeResponseModel extends BaseModel {
    status: number;
    result?: Postcode;
    error?: string;
  }
  