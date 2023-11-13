import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent {

  @Input() InputImagemBaner:string
  public loaded:boolean = true
  public imagem:string
  public urlApi:string = `${environment.API}/upload/`
  
  constructor(){

  }

  ngOnInit(){
    this.onImageLoad()
  }

  onImageLoad(){
    this.loaded = false
    this.imagem = `${this.urlApi}${this.InputImagemBaner}`
  }


}
