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
  
  public nameNimate:string
  public isErro:boolean
  public isModal: boolean
  public cep:string = ""
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

  onKeyDown(event: Event) {
    const eventKey = (event as KeyboardEvent)
    // Verifica se o caractere digitado não é um número
    if (!(eventKey.key >= '0' && eventKey.key <= '9' || eventKey.key === 'Backspace')) {
      // Impede a ação padrão do evento (inserir o caractere no campo)
       event.preventDefault();
    }else{
      this.isErro = false
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

    if(this.cep != ""){
      this.scrollService.disableScroll()
      this.isModal = true
      this.nameNimate = "show-modal"
    }else{
      this.isErro = true
    }
        

  }

  hiddenModal(){
    this.nameNimate = "hidden-modal"

    setTimeout(() => {
      this.scrollService.enableScroll()
      this.isModal = false
      this.cep = ""
    }, 400);

  }

  requestFrete(){
    this.licuteService.calculoFrete(this.cep, this.detalhe.id)
      .then((response:IReponse) => console.log(response))
      .catch((erro:Error) => console.log(erro))
  }
  

}
