import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from "../../services/auth-guard.service"
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;
  user: any;

  constructor(
    private _AuthGuardService: AuthGuardService, 
    private _AuthService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private _router: Router 
    ) {
      this.user =this._AuthService.getUserData();
      this.user = JSON.parse(this.user);
     }


  ngOnInit(): void {
    this.user =this._AuthService.getUserData();
    this.user = JSON.parse(this.user);
  }

  isLogin():boolean{
   return this._AuthService.isAuthenticated();
  }

  onLogoutClick(){
    this._AuthService.logout();
    this._flashMessagesService.show("Logout successfull.",{ cssClass: 'alert-success' });
    this._router.navigate(['/']);
  }

}
