import { Component, Input } from '@angular/core';
import { Catalogo } from 'src/app/shared/Catalogo.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent {

  @Input() InputImagemBaner:Catalogo
  public imagem:string
  public urlApi:string = `${environment.API}/upload/`
  public baseURL:string
  
  constructor(){

  }

  ngOnInit(){
    this.imagem = `${this.urlApi}${this.InputImagemBaner.img}`
    this.baseURL = this.InputImagemBaner.nome
  }

}
