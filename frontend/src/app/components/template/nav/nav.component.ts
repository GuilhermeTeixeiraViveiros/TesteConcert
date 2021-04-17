import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  
  mostrarMenu: boolean = false
  mostrarLogin: boolean = true
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe((mostrar) => {
      this.mostrarMenu = mostrar
      this.mostrarLogin = !mostrar
    }
    );
}
  logout(){
    this.authService.logout();
  }
}
