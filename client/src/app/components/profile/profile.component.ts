import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private _AuthService:AuthService,) { 
    this.user = this._AuthService.getUserData();
    this.user= JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

}
