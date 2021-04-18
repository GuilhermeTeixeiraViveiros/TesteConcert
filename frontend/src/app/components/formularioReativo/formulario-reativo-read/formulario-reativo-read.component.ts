import { Component, OnInit } from '@angular/core';
import { FormularioReativoService } from '../formulario-reativo.service';
import { Pessoa } from '../pessoa-model';

@Component({
  selector: 'reativo-read',
  templateUrl: './formulario-reativo-read.component.html',
  styleUrls: ['./formulario-reativo-read.component.sass']
})
export class FormularioReativoReadComponent implements OnInit {
  
  pessoas: Pessoa[]
  constructor(private fRService: FormularioReativoService) { }
  displayedColumns = ['id', 'nome', 'email', 'idade', 'update', 'delete'];
  ngOnInit(): void {
    this.fRService.read().subscribe((pessoas) =>{
      this.pessoas = pessoas
    })
  }
}