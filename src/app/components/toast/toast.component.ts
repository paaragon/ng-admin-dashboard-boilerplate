import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from '../../services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.toastService.toastEmitter
      .subscribe((toast: Toast) => {
        this.toasts.push(toast);
        setTimeout(() => this.toasts.shift(), 10000);
      });
  }

  toastClass(toast: Toast) {
    switch (toast.type) {
      case 'info':
        return 'alert-info';
      case 'success':
        return 'alert-success';
      case 'warning':
        return 'alert-warning';
      case 'danger':
        return 'alert-danger';
      default:
        return 'alert-info';
    }
  }

}
