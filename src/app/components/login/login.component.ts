import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Autenticacao } from 'src/app/services/Autenticacao.service';
import { ReponserSingIng } from 'src/app/shared/ReponserSingIng.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Autenticacao]
})

export class LoginComponent {

  public formulario: FormGroup = new FormGroup({ 'email': new FormControl(null), 'senha': new FormControl(null) })

  public loading:boolean

  constructor(private autenticacao: Autenticacao, private router:Router){
    
  }

  public login():void {

    const {email, senha} = this.formulario.value
    this.loading = true
    this.autenticacao.autenticar(email, senha)
      .then((response:ReponserSingIng) => {
        
        if(response != undefined){
          this.loading = false
          localStorage.setItem('idToken', response.token)
          localStorage.setItem('_access', btoa(JSON.stringify({ id: response.id, nome: response.nome, cpf: response.cpf, email: response.email })))
          this.router.navigate(['/meu-acesso'])
        }

      })
      .catch(erro => {
        console.log(erro)
      })
    
  }

}
