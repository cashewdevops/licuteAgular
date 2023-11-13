
export class Catalogo {
    id:number
    nome:string
    isbaner:boolean
    img:string
    ordenacao:number
    has:Array<{
        id:number
        nome:string
        qtd_min:number
        descricao:string
        preco:number
        ativado:boolean
        imagemProduto:Array<{
            id:number
            img:string
        }>
    }>
}

