import { Component, Input } from '@angular/core';
import { IndiceRota } from 'src/app/shared/IndiceRota';

@Component({
  selector: 'app-indice-pagina',
  templateUrl: './indice-pagina.component.html',
  styleUrls: ['./indice-pagina.component.scss']
})
export class IndicePaginaComponent {

  @Input() pagina:IndiceRota

}
