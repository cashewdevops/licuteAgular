import { IErro } from "../types/IErro";

export class HttpErrorResponse {
    erro:IErro
    ok:boolean
    status:number
    statusText:string
}