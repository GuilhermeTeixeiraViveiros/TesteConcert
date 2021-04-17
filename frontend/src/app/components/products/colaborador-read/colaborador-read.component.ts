import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../products/colaborador.service';
import { Colaborador } from '../colaborador-model';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.sass']
})
export class ColaboradorReadComponent implements OnInit {

  colaborador : Colaborador[]
  constructor(private colaboradorService: ColaboradorService) { }
  displayedColumns = ['id', 'nome', 'CPF', 'nascimento', 'genero', 'ativo', 'setor', 'update', 'delete'];
  ngOnInit(): void {
    this.colaboradorService.read().subscribe(colaborador =>{
      this.colaborador = colaborador
    })
  }
}
