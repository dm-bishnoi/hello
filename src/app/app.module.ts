import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { WildlifeComponent } from "./wildlife/wildlife.component";
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';


@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    WildlifeComponent,
    LoginComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "sport",
        component : SportsComponent
      },
      {
        path: "wildlife",
        component : WildlifeComponent
      },
      {
        path: "login",
        component : LoginComponent
      }
      ,
      {
        path: "practice",
        component : PracticeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
