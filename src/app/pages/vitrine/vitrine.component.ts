import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autenticacao } from 'src/app/Autenticacao.service';
import { LicuteService } from 'src/app/licute.service';
import { Catalogo } from 'src/app/shared/Catalogo.model';
import { Vitrine } from 'src/app/shared/Vitrine.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent {

  public categoria:Array<any> = []
  public categoriaSeleionado:Array<any> = []
  public paginaVitrine:string
  public catalogos: Catalogo[]

  constructor(private licute:LicuteService, private autenticacao: Autenticacao ,private route: ActivatedRoute){

  }

  ngOnInit(){

    this.seacherCatalogo()
    
  }

  isFiltro(filtro: Event){

    let idcategoria = parseInt((<HTMLInputElement>filtro.target).value)

    const response = this.categoria.find(d => d.id == idcategoria)
    const index = this.categoriaSeleionado.findIndex(d => d == idcategoria)

    if(response){
      if(!response.checked){
        this.categoriaSeleionado.push(idcategoria)
        response.checked = true
      }else{
        response.checked = false
        this.categoriaSeleionado.splice(index, 1)
      }
    }    

    console.log(this.categoriaSeleionado)

    this.seacherCatalogo()

  }

  seacherCatalogo(){

    let pagina = this.route.snapshot.params['qual']
    this.paginaVitrine = pagina

    this.licute.getCatalogo(pagina, this.categoriaSeleionado)
      .then((response:Vitrine) =>{

        this.catalogos = response.vitrine

        for(const row of response.categoria){
          const response = this.categoria.find(dd => dd.id == row.id)
          if(!response){
            this.categoria.push({id: row.id, nome:row.nome, checked: false})
          }
         
        }

      })
      .catch(erro => console.log(erro))
  }

}
