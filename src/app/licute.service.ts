import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Autenticacao } from './Autenticacao.service';
import { IUsuario } from './types/Iusuario';
import { Vitrine } from './shared/Vitrine.model';
import { Categoria } from './shared/Categoria';
import { SearchProduto } from './shared/SearchProduto';
import { IReponseHttp } from './types/IRespondeHttp';


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

    let usuarioId = null

    if(await this.autenticacao.autenticando() != false && this.usuario != undefined){
      usuarioId = this.usuario.id
    }
    
    const body = JSON.stringify({usuarioid: usuarioId})

    return this.http.post(`${this.url}/catalogo`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  
  async getCatalogoBusca(nome:string, categoria:Array<number>): Promise<Vitrine>{

    const headers = {
      "Content-Type": "application/json",
    }

    let usuarioId = null

    if(await this.autenticacao.autenticando() != false && this.usuario != undefined){
      usuarioId = this.usuario.id
    }

    const body = JSON.stringify({nome: nome, CategoriaId:categoria, usuarioId: usuarioId})
    
    return this.http.post(`${this.url}/catalogo-search`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => erro)

  }

  getCategoria():Promise<Categoria>{

    return this.http.get(`${this.url}/categoria`)
      .toPromise()
      .then((response:any) => response)
      .catch(erro => erro)

  }

  async searchProduto(produtoId:number, descricao:string): Promise<SearchProduto>{

    const headers = {
      "Content-Type": "application/json",
    }

    const body = JSON.stringify({
      produtoId: produtoId,
      descricao: descricao
    })

    let usuarioId = null

    if(await this.autenticacao.autenticando() != false && this.usuario != undefined){
      usuarioId = this.usuario.id
    }

    return this.http.post(`${this.url}/detalhe-produto`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch((erro:any) => erro)

  }

  async addfavorito(produtoId:number): Promise<IReponseHttp>{

    const headers = {
      "Content-Type": "application/json",
    }

    let usuarioId = null

    if(await this.autenticacao.autenticando() != false && this.usuario != undefined){
      usuarioId = this.usuario.id
    }
 
    const body = JSON.stringify({
      produtoId:produtoId,
      usuarioId:usuarioId
    })

    return this.http.post(`${this.url}/favorito-add`, body, {headers} )
      .toPromise()
      .then((response:any) => response)
      .catch((erro:any) => erro)

  }


  async getFavorito(){

    const headers = {
      "Content-Type": "application/json",
    }

    let usuarioId = null

    if(await this.autenticacao.autenticando() != false && this.usuario != undefined){
      usuarioId = this.usuario.id
    }
 
    const body = JSON.stringify({
      usuarioId:usuarioId
    })

    return this.http.post(`${this.url}/favorito`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch((erro:Error) => erro)

  }

  async favoritos(): Promise<IReponseHttp> {

    const headers = {
      "Content-Type": "application/json",
    }

    const body = JSON.stringify({
      usuarioId: this.usuario.id
    })

    return this.http.post(`${this.url}/favoritos`, body, {headers})
    .toPromise()
      .then((response:any) => response)
      .catch((erro:Error) => erro)
  }


}
