import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Catalogo } from './shared/Catalogo.model';
import { Autenticacao } from './Autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class LicuteService {
  
  private url:string = environment.API
  private token:string
  constructor(private http: HttpClient, private autenticacao:Autenticacao) { }

  ngOnInit(){

    let locationToken = localStorage.getItem('idToken')

    locationToken != undefined ? this.token = locationToken : null

  }

  async getHomePage(): Promise<Catalogo[]>{

    if (!this.token) {
      this.token = ''
    }

    const headers = {
      "authorization": this.token
    }

    return this.http.get(`${this.url}/catalogo`, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  
  getCatalogo(nome:string): Promise<any>{

    const headers = {
      "Content-Type": "application/json",
    }

    const body = JSON.stringify({nome: nome})

    return this.http.post(`${this.url}/catalogo-search`, body, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => erro)

  }

}
