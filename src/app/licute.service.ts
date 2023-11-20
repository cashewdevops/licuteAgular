import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Catalogo } from './shared/Catalogo.model';
import { Autenticacao } from './Autenticacao.service';
import { ICategoria } from './types/ICategoria';
import { IUsuario } from './types/Iusuario';

@Injectable({
  providedIn: 'root'
})
export class LicuteService {
  
  private url:string = environment.API
  private token:string
  private usuario:IUsuario

  constructor(private http: HttpClient, private autenticacao:Autenticacao) { 
    
    let token = localStorage.getItem('idToken')
    if(token != undefined){
      this.token = token
    }

    let acesso = localStorage.getItem('_access')
    if(acesso != undefined){
      this.usuario = JSON.parse(atob(acesso))
    }

  }
  

  async getCatalogo(){

    const headers = {
      "Content-Type": "application/json",
    }

  
    const body = JSON.stringify({usuarioid: this.usuario.id})

    return this.http.post(`${this.url}/catalogo`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  
  getCatalogoBusca(nome:string, categoria:Array<number>): Promise<any>{

    const headers = {
      "Content-Type": "application/json",
      "authorization": this.token
    }

    const body = JSON.stringify({nome: nome, CategoriaId:categoria})
    
    return this.http.post(`${this.url}/catalogo-search`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => erro)

  }

  getCategoria():Promise<ICategoria[]>{

    return this.http.get(`${this.url}/categoria`)
      .toPromise()
      .then((response:any) => response)
      .catch(erro => erro)

  }

}
