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

    return this.http.get(`${this.url}/catalogo`)
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  

}
