import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();

  authSubscrption: Subscription;

  constructor() { }


  ngOnInit(): void {
    // this.authSubscrption = this.authService.authChanged.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // })
  }


  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    // this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscrption.unsubscribe();
  }

}
