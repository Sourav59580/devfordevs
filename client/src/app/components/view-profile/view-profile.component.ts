import { Component, OnInit } from '@angular/core';
import { PublicProfileService } from "../../services/public-profile.service"
import { Router, RouterLinkActive, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  id: any
  user:any;
 

  constructor(
    private _PublicProfileService:PublicProfileService,
    private route: ActivatedRoute,
    private _AuthService: AuthService, ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      sessionStorage.setItem("developerId",this.id)
    });
    
    this._PublicProfileService.getProfile(this.id).subscribe(res=>{
      console.log(res.data);
      this.user = res.data
    }, err => {
      console.log(err);
      return false;
    })

    

    
   }

  ngOnInit() {
    // this.route.params.subscribe(params => this.id = params['id']);
    // console.log(this.id)
  }
  
}
