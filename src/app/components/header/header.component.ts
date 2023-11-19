import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { VerificarToken } from 'src/app/shared/VerificarToken';
import { ICategoria } from 'src/app/types/ICategoria';
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

  constructor(private autenticacao:Autenticacao){

  }

  ngOnInit(){
    this.checkedAutenticacao()
  }
  checkedAutenticacao(){

    this.autenticacao.verifyToken()
    .then((response:VerificarToken) => {
      if(response.usuario.nome != undefined){
        this.isLogado = true
        this.Usuario = response.usuario
      }
      this.categoria = response.categoria
    })


  }


}
