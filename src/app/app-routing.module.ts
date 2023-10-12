import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'acesso', component: AcessoComponent, children: [
    {path: '', component: LoginComponent},
    {path: 'select-login', component: LoginComponent},
    {path: 'select-registro', component: RegistroComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
