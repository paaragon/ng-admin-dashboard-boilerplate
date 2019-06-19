import { Injectable, EventEmitter } from '@angular/core';

export interface Toast {
  message: string;
  type: 'info' | 'success' | 'danger' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastEmitter: EventEmitter<Toast> = new EventEmitter<Toast>();


  constructor() { }

  add(message: string, type: 'info' | 'success' | 'danger' | 'warning' = 'info') {
    this.toastEmitter.emit({ message, type });
  }
}
