import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-formulario-reativo-crud',
  templateUrl: './formulario-reativo-crud.component.html',
  styleUrls: ['./formulario-reativo-crud.component.sass']
})
export class FormularioReativoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    this.headerService.headerData = {
      title : 'Formulário Reativo',
      icon : 'account_circle',
      routeURL: '/colaboradores'
    }
  }
  ngOnInit(): void {
  }
  pessoaCreate(): void{
    this.router.navigate(['/formulario-reativo/create']);
  }
}
