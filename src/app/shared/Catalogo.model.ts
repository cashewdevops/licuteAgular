import { IProduto } from "./IProduto"


export class Catalogo {
    id:number
    nome:string
    isbaner:boolean
    img:string
    ordenacao:number
    has:Array<IProduto>
}

