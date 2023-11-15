import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-image-produto',
  templateUrl: './image-produto.component.html',
  styleUrls: ['./image-produto.component.scss']
})
export class ImageProdutoComponent {
  
  @Input() InputImage:string
  public outputImage:string
  public baseURL:string = environment.API

  constructor(){

  }

  ngOnInit(){
    this.outputImage = `${this.baseURL}/upload/${this.InputImage}`
  }


}
