import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { OwnQuesAnsComponent } from './own-ques-ans/own-ques-ans.component';


@NgModule({
  declarations: [OwnQuesAnsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
