import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Autenticacao } from "./Autenticacao.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AutenticacaoServiceGuard implements CanActivate {

    constructor(private autenticacao:Autenticacao, private router: Router){

    }

   async canActivate(
        next:ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):Promise<boolean>{

        if(await this.autenticacao.autenticando()){
            return true 
        }else{
            this.router.navigate([''])
            return false
        }
    }
} 