
interface Ibanes{
    url:string
}
interface IImagens {
    url:string
}

interface IDestaque {
    titulo:string,
    bander: Array<Ibanes>
}

interface IProdutos {
    id:number
    titulo:string,
    valor:number,
    avaliacao:number,
    categoriaId:number,
    imagens: Array<IImagens>
}

interface IDepartamentos {
    titulo:string,
    produtos: Array<IProdutos>
}

export class DataHome {
    destaques: IDestaque
    departamentos: Array<IDepartamentos>
}