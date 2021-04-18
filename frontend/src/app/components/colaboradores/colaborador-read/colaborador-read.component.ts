import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  todosColaboradores : Colaborador[]
  colaboradoresExibidos : Colaborador[]

  constructor(private spinnerService: NgxSpinnerService, private colaboradorService: ColaboradorService) { }
  displayedColumns = ['id', 'nome', 'CPF', 'nascimento', 'genero', 'ativo', 'setor', 'update', 'delete'];
  ngOnInit(): void {
    this.spinnerService.show();
    this.colaboradorService.read().subscribe(colaborador =>{
      this.todosColaboradores = colaborador
      this.colaboradoresExibidos = colaborador
    })
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
  }

  getTotalCount() : number{
    return this.todosColaboradores?.length;
  }
  getMaleCount() : number{
    return this.todosColaboradores?.filter((e)=> e.genero === "1").length;
  }
  getFemaleCount() : number{
    return this.todosColaboradores?.filter((e)=> e.genero === "2").length;
  }
  onGenderSelectorChange(selectedGender: string): void{
    selectedGender === "0" ? this.colaboradoresExibidos = this.todosColaboradores : 
    this.colaboradoresExibidos = this.todosColaboradores.filter((e)=> e.genero === selectedGender)
  }
}
