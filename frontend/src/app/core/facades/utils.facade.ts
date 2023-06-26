
import { Injectable, inject } from '@angular/core';
import { ToastService } from '../utils/toast.service';


@Injectable({
  providedIn : 'root'
})
export class UtilsFacades {

  public toastService   = inject(ToastService);
  private emailRegex    = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private phoneRegex    = /^\+?[1-9][0-9]{7,14}$/;

  errorToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildDanger();
  }

  successToastMessage(message  : string) {
    return this.toastService.setMessage(message).buildSuccess();
  }
  testEmail(email : string) {
    return this.emailRegex.test(email);
  }

  testPhoneNumber(phone : string){
    return this.phoneRegex.test(phone);
  }
}
