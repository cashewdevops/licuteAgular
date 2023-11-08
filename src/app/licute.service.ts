import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DataHome } from './shared/DataHome.model';

@Injectable({
  providedIn: 'root'
})
export class LicuteService {
  
  private url:string = environment.API

  constructor(private http: HttpClient) { }

  async getHomePage(): Promise<DataHome>{

    return this.http.get(`${this.url}/data_home`)
      .toPromise()
      .then((response:any) => response)
      .catch(erro => console.log(erro))

  }

  

}
