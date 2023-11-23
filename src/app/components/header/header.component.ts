import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { LicuteService } from 'src/app/licute.service';
import { Categoria } from 'src/app/shared/Categoria';
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

  constructor(private autenticacao:Autenticacao, private licute:LicuteService){

    let acesso = localStorage.getItem('_access')
    if(acesso != undefined){
      this.Usuario = JSON.parse(atob(acesso))
    }

  }

  ngOnInit(){
    this.checkedAutenticacao()
    this.getCategoria()
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


}
