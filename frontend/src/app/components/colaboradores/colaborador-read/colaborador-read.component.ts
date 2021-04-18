import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../colaboradores/colaborador.service';
import { Colaborador } from '../colaborador-model';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.sass']
})
export class ColaboradorReadComponent implements OnInit {
  todos: number
  masculino: number
  feminino: number

  colaborador : Colaborador[]
  constructor(private colaboradorService: ColaboradorService) { }
  displayedColumns = ['id', 'nome', 'CPF', 'nascimento', 'genero', 'ativo', 'setor', 'update', 'delete'];
  ngOnInit(): void {
    this.colaboradorService.read().subscribe(colaborador =>{
      this.colaborador = colaborador
    })
  }
  getTotalCount() : number{
    return this.colaborador?.length;
  }
  getMaleCount() : number{
    return this.colaborador?.filter((e)=> e.genero === "1").length;
  }
  getFemaleCount() : number{
    return this.colaborador?.filter((e)=> e.genero === "2").length;
  }
}
