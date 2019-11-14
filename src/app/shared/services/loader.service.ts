import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class LoaderService {

  showLoading: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  show() {
    this.showLoading.emit(true);
  }

  hide() {
    this.showLoading.emit(false);
  }

  isShow(): Observable<boolean> {
    return this.showLoading.asObservable();
  }
}
