import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { AutenticacaoServiceGuard } from './autenticacaoservice-guard.service';
import { DetalheComponent } from './pages/detalhe/detalhe.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'acesso', component: AcessoComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent}
  ]},
  {path: 'meu-acesso', component: PerfilUsuarioComponent, canActivate: [AutenticacaoServiceGuard]},
  {path: 'produto/:id/:descricao', component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
