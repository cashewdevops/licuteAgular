import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment.development";
import { ReponserSingIng } from "../shared/ReponserSingIng.model";


interface responCheckedToken {
    status:number,
    msg:string
}

@Injectable()
export class Autenticacao {

    private token:string
    private rota:string = environment.API
  

    constructor(private http:HttpClient, ){

        let token = localStorage.getItem('idToken')
        if(token != undefined){
            this.token = token
        }

    }

    async autenticar(email:string, senha:string): Promise<ReponserSingIng> {


            const headers = {
                "Content-Type": "application/json"
            }
            const body = JSON.stringify({email: email, senha: senha})
            
            return this.http.post(`${this.rota}/user-singin`, body, { headers })
                .toPromise()
                .then((response:any) => response)
                .catch(erro => erro)
            

    }

    async autenticando(): Promise<boolean>{

        if(this.token == undefined && localStorage.getItem('idToken') != null){
            const idToken = localStorage.getItem('idToken');
            if (idToken !== null) {
                if(await this.verifyToken()){
                    this.token = idToken;
                }
                else{
                    this.token!== undefined
                }
               
            }
        }

        return this.token !== undefined
    }

    async verifyToken(): Promise<boolean>{

           try {

                let token = localStorage.getItem('idToken');
                if (!token) {
                    token = ''
                }
                const headers = {
                    "Content-Type": "application/json",
                    "authorization": token
                }   
                    
                const response = await this.http.post(`${this.rota}/checked-token`, {}, {headers}).toPromise()

                const auth = response as responCheckedToken

                if(auth){
                    if(auth.status == 200){
                        return true
                    }else{
                        return false
                    }
                }
                
                return false
            
           } catch (error) {
                return false
           }
    }

}