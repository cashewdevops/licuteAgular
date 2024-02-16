import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  @Output() EventClick = new EventEmitter<any>()
  @Input() enabeleLoading:boolean[] = [false]
  @Input() isLoading: boolean

  OutEnventClick(){

    if(this.enabeleLoading.includes(true)){
      this.isLoading = true
    }
    
    this.EventClick.emit()
  }


}
