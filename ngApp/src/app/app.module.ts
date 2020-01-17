import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"login",component:LoginComponent},
      {path:"home",component:HomeComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"register",component:RegisterComponent}

    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(){
    console.log("App.Module.created");
  }
 }
