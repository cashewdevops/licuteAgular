import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indice-pagina',
  templateUrl: './indice-pagina.component.html',
  styleUrls: ['./indice-pagina.component.scss']
})
export class IndicePaginaComponent {

  @Input() pagina:string

}
