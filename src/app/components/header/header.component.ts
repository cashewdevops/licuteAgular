import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { IUsuario } from 'src/app/types/Iusuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',]
})
export class HeaderComponent {
  
  public isLogado:boolean = false
  public Usuario:IUsuario

  constructor(private autenticacao:Autenticacao){

  }

  ngOnInit(){
    this.checkedAutenticacao()
  }
  checkedAutenticacao(){
    this.autenticacao.verifyToken()
    .then((response:IUsuario) => {
      if(response.nome != undefined){
        this.isLogado = true
        this.Usuario = response
      }
    })
  }


}
