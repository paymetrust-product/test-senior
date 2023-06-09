import { Component } from '@angular/core';
import { SpaceToastService } from '../../services/space-toast.service';

@Component({
  selector: 'space-toasts',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(public spaceToastService: SpaceToastService){}
}
