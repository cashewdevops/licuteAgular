import { IProduto } from "../types/IProduto"


export class Catalogo {
    id:number
    nome:string
    isbaner:boolean
    img:string
    ordenacao:number
    has:Array<IProduto>
}

