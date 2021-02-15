import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSidenav = new EventEmitter<void>();

  // isAuth: boolean = false;
  // authSubscription: Subscription;

  constructor() { }


  ngOnInit(): void {
    // this.authSubscription = this.authService.authChanged.subscribe(
    //   authStatus => {
    //     this.isAuth = authStatus;
    //   }
    // )
  }

  onCloseSidenav() {
    this.closeSidenav.emit();
  }

  onLogout() {
    // this.authService.logout();
    this.onCloseSidenav();
  }


  ngOnDestroy(): void {
    // this.authSubscription.unsubscribe();
  }


}
