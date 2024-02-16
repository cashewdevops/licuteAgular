import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }


  enableScroll(){
    document.body.style.overflow = "auto"
  }
  disableScroll(){
    document.body.style.overflow = "hidden"
  }

}
