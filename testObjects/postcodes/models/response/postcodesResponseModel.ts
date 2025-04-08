import { Postcode } from "../base/index.js"

export interface PostcodesResponseModel {
    status: number;
    result?: Postcode[];
    error?: string;
  }