import { Postcode } from "../base"

export interface BulkPostcodesReponseModel {
    status: number
    result: Result[]
}

export interface Result {
    query: string
    result: Postcode
  }