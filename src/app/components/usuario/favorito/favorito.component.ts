import { Component } from '@angular/core';
import { LicuteService } from 'src/app/licute.service';
import { IFavoritos } from 'src/app/types/IFavoritos';
import { IReponseHttp } from 'src/app/types/IRespondeHttp';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent {

  public data:IFavoritos[] = []

  constructor(
    private licute: LicuteService
  ){}

  ngOnInit(){
    this.favoritos()
  }

  favoritos(){
    this.licute.favoritos()
    .then((response:IReponseHttp) => {
      if(response.status == "OK"){
        this.data = response.data
      }
    })
    .catch((erro:Error) => console.log(erro))
  }


}
