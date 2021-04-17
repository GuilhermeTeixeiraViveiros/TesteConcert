import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../template/header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  constructor(private router: Router, private headerService: HeaderService) { 
    this.headerService.headerData = {
      title : 'Login',
      icon : 'login',
      routeURL: '/login'
    }
  }
  ngOnInit(): void {
  }

  login(){
    console.log(this.username)
    console.log(this.password)
  }

  
  cancel(){
    return
  }
}
