import { CanActivate } from "@angular/router";
import { Autenticacao } from "./Autenticacao.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AutenticacaoServiceGuard implements CanActivate {

    constructor(private autenticacao:Autenticacao){

    }

    canActivate():boolean{
        return this.autenticacao.autenticando()
    }
} 