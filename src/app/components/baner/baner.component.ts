import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent {

  @Input() InputImagemBaner:Array<any>
  public imagem:string
  public urlApi:string = `${environment.API}/upload/`
  public baseURL:string
  
  constructor(){

  }

  ngOnInit(){
    this.imagem = `${this.urlApi}${this.InputImagemBaner[0]}`
    this.baseURL = this.InputImagemBaner[1]
  }

}
