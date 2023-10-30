import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment.development";
import { Router } from "@angular/router";

interface ApiResponse {
    token:string,
    status:number
}

@Injectable()
export class Autenticacao {

    public token:string
    private rota:string = environment.API
  

    constructor(private http:HttpClient, private router:Router){

    }

    public async autenticar(email:string, senha:string) {

        const headers = {
            "Content-Type": "application/json"
        }
        const body = JSON.stringify({email: email, senha: senha})
        
        const response = await this.http.post(`${this.rota}/login`, body, { headers }).toPromise();
        
        const status = (response as ApiResponse)?.status

        if(status == 200){
            this.token = (response as ApiResponse)?.token
            this.router.navigate(['/meu-acesso'])
        }
       

    }

    public autenticando(){

        return this.token !== undefined
    }

}