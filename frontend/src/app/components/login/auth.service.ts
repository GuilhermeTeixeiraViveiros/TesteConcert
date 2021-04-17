import { Injectable, EventEmitter } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';

import { User } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  login(usuario: User): boolean {
    if((usuario.username === "concert") && (usuario.password === "prova")){
      this.usuarioAutenticado = true
      this.mostrarMenuEmitter.emit(true);
      return true
    }else{
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false);
      return false
    }
  }
  logout(){
    this.mostrarMenuEmitter.emit(false)
  }
}
