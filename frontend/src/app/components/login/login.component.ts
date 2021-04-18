import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HeaderService } from '../template/header/header.service';
import { AuthService } from './auth.service';
import { User } from './user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  user: User = new User();
  msg: string = ""
  constructor(private spinnerService: NgxSpinnerService, private router: Router, private headerService: HeaderService, private authService: AuthService) { 
    this.headerService.headerData = {
      title : 'Login',
      icon : 'login',
      routeURL: '/login'
    }
  }
  ngOnInit(){
  }
  
  login(){
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
    if(this.authService.login(this.user)){
      this.router.navigate(["/"])

    } else{
      setTimeout(() => {
        this.spinnerService.hide();
      }, 500);
      this.msg = "Acesso Negado!"
      console.log(this.msg)
    }
    
  }

  
  cancel(){
    this.router.navigate(["/"])
  }
}
