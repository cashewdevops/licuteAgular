import { Component, Input } from '@angular/core';
import { IFavoritos } from 'src/app/types/IFavoritos';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-produto-favorito',
  templateUrl: './produto-favorito.component.html',
  styleUrls: ['./produto-favorito.component.scss']
})
export class ProdutoFavoritoComponent {

  @Input() inputPedito:IFavoritos

  public url:string = environment.API
  
}
