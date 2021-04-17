import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-colaborador-crud',
  templateUrl: './colaborador-crud.component.html',
  styleUrls: ['./colaborador-crud.component.sass']
})
export class ColaboradorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    this.headerService.headerData = {
      title : 'Colaboradores',
      icon : 'account_circle',
      routeURL: '/colaboradores'
    }
  }

  ngOnInit(): void {
  }

  colaboradorCreate(): void{
    this.router.navigate(['/colaboradores/create']);
  }
}
