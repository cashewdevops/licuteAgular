import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-frete',
  templateUrl: './show-frete.component.html',
  styleUrls: ['./show-frete.component.scss']
})
export class ShowFreteComponent {

  @Input() animate:string
  @Input() isModalCep:boolean
  @Output() isCloseModel = new EventEmitter<any>()


  OutClose(){
    this.isCloseModel.emit()
  }

}
