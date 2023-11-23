import { Component, Input } from '@angular/core';
import { IProduto } from 'src/app/types/IProduto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  @Input() inputdados: IProduto[]

  constructor(){

  }

}
