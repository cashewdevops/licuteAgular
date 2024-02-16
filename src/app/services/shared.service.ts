import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private upadateHeaderSubject = new Subject<void>()

  updateHeadr$ = this.upadateHeaderSubject.asObservable()

  constructor() { }

  triggerUpdateHeader() {
    this.upadateHeaderSubject.next()
  }

}
