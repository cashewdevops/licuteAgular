import { Component, Input } from '@angular/core';
import { IProduto } from 'src/app/types/IProduto';

@Component({
  selector: 'app-produto-vitrine',
  templateUrl: './produto-vitrine.component.html',
  styleUrls: ['./produto-vitrine.component.scss']
})
export class ProdutoVitrineComponent {

  @Input() inputdados: IProduto[]

}
