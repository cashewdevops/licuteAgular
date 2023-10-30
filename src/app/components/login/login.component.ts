import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Autenticacao } from 'src/app/Autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Autenticacao]
})

export class LoginComponent {

  public formulario: FormGroup = new FormGroup({ 'email': new FormControl(null), 'senha': new FormControl(null) })

  constructor(private autenticacao: Autenticacao){
    
  }

  public login():void {

    const {email, senha} = this.formulario.value

    this.autenticacao.autenticar(email, senha)
    // .then(response => {
    //   this.token = response.token
    //   this.router.navigate(['/meu-acesso'])
    // })   
  }

}
