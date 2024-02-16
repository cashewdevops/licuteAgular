import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicuteService } from 'src/app/services/licute.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { IImagemProduto } from 'src/app/types/IImagemProduto';
import { IProduto } from 'src/app/types/IProduto';
import { IReponse } from 'src/app/types/IReponse';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent {
  
  public isModal: boolean
  private cep:string
  public setImagem:string
  public ImagemArry:Array<IImagemProduto>
  public urlbaseImagem:string = environment.API
  public detalhe:IProduto
  public isProduto: boolean
  constructor(private routerActivate: ActivatedRoute, private licuteService:LicuteService, private scrollService: ScrollService){

  }
  
  ngOnInit(){
    this.getProduto()
  }
  
  getProduto(){

    let produtoIdRoute = this.routerActivate.snapshot.paramMap.get('id')
    const descricaoIdRoute = this.routerActivate.snapshot.paramMap.get('descricao')

    if(produtoIdRoute != null && descricaoIdRoute != null){
      this.licuteService.searchProduto(parseInt(produtoIdRoute), descricaoIdRoute)
      .then((response:IReponse) => {

        if(response.status = "OK"){

          const data = response.data as IProduto 
      
          this.detalhe = data
          if(data.imagemProduto.length){
            this.ImagemArry = data.imagemProduto
            this.setImagem = `${this.urlbaseImagem}/upload/${this.ImagemArry[0].img}`
          }

        }

      })
      .catch((erro:any) => console.log(erro))
    }

   
  }

  mudarImagem(src: Event){
    // this.setImagem = (<HTMLInputElement>src.target).src
    this.setImagem = (src.target as HTMLInputElement).src
    
  }

  onKeyDown(event: KeyboardEvent) {

    // Verifica se o caractere digitado não é um número
    if (!(event.key >= '0' && event.key <= '9' || event.key === 'Backspace')) {
      // Impede a ação padrão do evento (inserir o caractere no campo)
       event.preventDefault();
    }
  }

  keyUpGetCep(event: Event){
  
    const input = (event.target as HTMLInputElement)
    const allowedChars = /[0-9]/;
    let key = (<KeyboardEvent>event).key

    if(!allowedChars.test(key)){
      input.value = input.value.replace(/\D/g, '') 
    }

    this.cep = input.value

  }

  showModal(){
    
    this.scrollService.disableScroll()
    this.isModal = true
    

  }

  hiddenModal(){
    this.scrollService.enableScroll()
    this.isModal = false
  }
  

}
