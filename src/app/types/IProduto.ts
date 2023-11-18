import { IImagemProduto } from "./IImagemProduto"

export interface IProduto {
    id:number
        nome:string
        qtd_min:number
        descricao:string
        preco:number
        ativado:boolean
        imagemProduto:Array<IImagemProduto>
}