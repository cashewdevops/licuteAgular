import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LicuteService } from 'src/app/licute.service';
import { SharedService } from 'src/app/shared.service';
import { IProduto } from 'src/app/types/IProduto';
import { IReponseHttp } from 'src/app/types/IRespondeHttp';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  @Input() inputdados: IProduto[]

  constructor(
    private licite: LicuteService, 
    private sharedService: SharedService,
    private router: Router
    ){}

  addVavorito(event: Event, id:number){

    event.stopPropagation()
    
    let response = this.inputdados.find(dd => dd.id == id)
    if(response){
      response.favoritado = true

      this.licite.addfavorito(id)
      .then((response:IReponseHttp) => {
        if(response.status == "OK"){
          this.sharedService.triggerUpdateHeader();
        }else{
          this.router.navigate(['/acesso'])
        }
      })
      .catch((erro:Error) => console.log(erro))

    }
    
  }
  removeVavorito(event: Event, id:number){

    event.stopPropagation()
   
    let response = this.inputdados.find(dd => dd.id == id)
    if(response){

      response.favoritado = false

    }
  }

  // Função que será chamada para atualizar o header
  chamarFuncaoNoHeader() {
   
  }





}
