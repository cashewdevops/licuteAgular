import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicuteService } from 'src/app/licute.service';
import { SearchProduto } from 'src/app/shared/SearchProduto';
import { IImagemProduto } from 'src/app/types/IImagemProduto';
import { IProduto } from 'src/app/types/IProduto';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent {
  
  public setImagem:string
  public ImagemArry:Array<IImagemProduto>
  public urlbaseImagem:string = environment.API
  public detalhe:IProduto
  public isProduto: boolean
  constructor(private routerActivate: ActivatedRoute, private licuteService:LicuteService){

  }
  
  ngOnInit(){
    this.getProduto()
  }
  
  getProduto(){

    let produtoIdRoute = this.routerActivate.snapshot.paramMap.get('id')
    const descricaoIdRoute = this.routerActivate.snapshot.paramMap.get('descricao')

    if(produtoIdRoute != null && descricaoIdRoute != null){
      this.licuteService.searchProduto(parseInt(produtoIdRoute), descricaoIdRoute)
      .then((response:SearchProduto) => {
        console.log(response.data)
        this.detalhe = response.data
        if(response.data.imagemProduto.length){
          this.ImagemArry = response.data.imagemProduto
          this.setImagem = `${this.urlbaseImagem}/upload/${this.ImagemArry[0].img}`
        }
        

      })
      .catch((erro:any) => console.log(erro))
    }

   
  }

  mudarImagem(src: Event){

    this.setImagem = (<HTMLInputElement>src.target).src

  }
  

}
