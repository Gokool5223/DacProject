import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmtrService } from '../emtr.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService) { }


  login(loginForm)
  {
    let data = loginForm.form.value;
   this.userService.login(data).subscribe(res=>{
    sessionStorage['email']=res['email'];
    this.emService.logInBtnSwitch(true);//
    this.router.navigate(['dash']);

   },(err)=>{

    alert("Something went wrong");
   })
  }

  ngOnInit() {
  }
}
