import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Catalogo } from './shared/Catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class LicuteService {
  
  private url:string = environment.API

  constructor(private http: HttpClient) { }

  async getHomePage(): Promise<Catalogo[]>{

    let token = localStorage.getItem('idToken');

    if (!token) {
        token = ''
    }

    const headers = {
      "authorization": token
    }

    return this.http.get(`${this.url}/catalogo`, {headers})
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  

}
