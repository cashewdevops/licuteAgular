import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {


  constructor(private router:Router){

  }

  ngOnInit(){
    
  }

  sair(){
    localStorage.removeItem('idToken')
    localStorage.removeItem('_access')
    this.router.navigate([''])
  }

  

}
