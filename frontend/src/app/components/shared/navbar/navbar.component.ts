import { Component, OnInit, inject } from '@angular/core';
import { StatesFacades } from 'src/app/core/facades/state.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  private state = inject(StatesFacades);
  isConnected : boolean = false;
  ngOnInit(): void {
    this.isConnected  = this.state.isConnected();

  }
  logout(){
    this.state.logout();
    location.reload();
  }


}
