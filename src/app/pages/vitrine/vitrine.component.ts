import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { LicuteService } from 'src/app/licute.service';
import { Catalogo } from 'src/app/shared/Catalogo.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent {

  public paginaVitrine:string
  public catalogos: Catalogo[]

  constructor(private licute:LicuteService, private autenticacao: Autenticacao ,private route: ActivatedRoute){

  }

  ngOnInit(){
    this.seacherCatalogo()
    
  }

  seacherCatalogo(){
    let pagina = this.route.snapshot.params['qual']
    this.paginaVitrine = pagina

    this.licute.getCatalogo(pagina)
      .then((response:Catalogo[]) =>{
        this.catalogos = response
      })
      .catch(erro => console.log(erro))
  }

}
