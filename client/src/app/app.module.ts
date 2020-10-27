import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

// Flash message
import { ToastModule } from 'ng-uikit-pro-standard';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Services
import { QueAnsService } from "./services/que-ans.service";
import { AuthService } from "./services/auth.service";


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { QueAnsComponent } from './components/que-ans/que-ans.component';
import { PostComponent } from './components/post/post.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DevelopersComponent,
    QueAnsComponent,
    PostComponent,
    QuestionComponent,
    AnswerComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    QueAnsService,
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
