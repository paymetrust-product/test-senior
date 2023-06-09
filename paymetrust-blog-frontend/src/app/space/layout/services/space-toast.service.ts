import { Injectable } from '@angular/core';

type ToastClassnames = 'bg-danger text-light' | 'bg-success text-light';

export interface ToastInfo {
  header: string;
  body: string;
  classname?: ToastClassnames;
  delay?: number;
}


@Injectable({
  providedIn: 'root'
})
export class SpaceToastService {
  toasts: ToastInfo[] = [];

  show(header: string, body: string, classname: ToastClassnames) {
    this.toasts.push({ header, body, classname });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
