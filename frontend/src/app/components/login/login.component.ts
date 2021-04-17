import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private headerService: HeaderService, private authService: AuthService) { 
    this.headerService.headerData = {
      title : 'Login',
      icon : 'login',
      routeURL: '/login'
    }
  }
  ngOnInit(): void {
  }

  login(){
    if(this.authService.login(this.user)){
      this.router.navigate(["/"])
    } else{
      this.msg = "Acesso Negado!"
      console.log(this.msg)
    }
    
  }

  
  cancel(){
    this.router.navigate(["/"])
  }
}
