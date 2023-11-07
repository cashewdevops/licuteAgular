import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent {
  
  private produtoId:number
  private descricao:string

  constructor(private routerActivate: ActivatedRoute){

  }
  
  ngOnInit(){
    const id = this.routerActivate.snapshot.paramMap.get('id');
    if (id !== null) {
      this.produtoId = +id; // Converte a string em número
    }

    const descricao = this.routerActivate.snapshot.paramMap.get('descricao');
    if(descricao != null){
      this.descricao = descricao
    }
    
    

  }

}
