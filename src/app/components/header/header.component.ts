import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { LicuteService } from 'src/app/licute.service';
import { SharedService } from 'src/app/shared.service';
import { Categoria } from 'src/app/shared/Categoria';
import { ICategoria } from 'src/app/types/ICategoria';
import { IReponseHttp } from 'src/app/types/IRespondeHttp';
import { IUsuario } from 'src/app/types/Iusuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',]
})
export class HeaderComponent {
  
  public categoria:Array<ICategoria>
  public isLogado:boolean = false
  public Usuario:IUsuario
  public qtdFavorito:number = 0

  constructor(
    private autenticacao:Autenticacao, 
    private licute:LicuteService,
    private sharedService: SharedService
    ){

    let acesso = localStorage.getItem('_access')
    if(acesso != undefined){
      this.Usuario = JSON.parse(atob(acesso))
    }

  }

  ngOnInit(){
    this.checkedAutenticacao()
    this.getCategoria()
    this.getFavorito()

    // esse evento é chamado no component Produto
    this.sharedService.updateHeadr$.subscribe(() => {
      this.getFavorito()
    });

  }

  async checkedAutenticacao(){

    if(this.Usuario != undefined){
        this.isLogado = true
        this.Usuario = this.Usuario
      }
      
  }

  getCategoria(){
    this.licute.getCategoria()
    .then((response:Categoria) => {
      if(response.status == "OK"){
        this.categoria = response.data
      }
    })
    .catch((erro:any) => erro)
  }

  getFavorito(){

    this.licute.getFavorito()
    .then((response:IReponseHttp) => {
      if(response.status == "OK"){
        this.qtdFavorito = response.data
      }
    })
    .catch((erro: Error) => console.log(erro))

  }


}
