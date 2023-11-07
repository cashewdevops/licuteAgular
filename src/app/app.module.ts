import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component'
import { AutenticacaoServiceGuard } from './autenticacaoservice-guard.service';
import { Autenticacao } from './Autenticacao.service';
import { LoadingComponent } from './components/loading/loading.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    FooterComponent,
    HeaderComponent,
    AcessoComponent,
    LoginComponent,
    RegistroComponent,
    PerfilUsuarioComponent,
    LoadingComponent,
    DetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Autenticacao, AutenticacaoServiceGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
