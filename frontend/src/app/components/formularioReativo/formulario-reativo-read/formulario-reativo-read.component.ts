import { Component, OnInit } from '@angular/core';
import { FormularioReativoService } from '../formulario-reativo.service';
import { Pessoa } from '../pessoa-model';

@Component({
  selector: 'reativo-read',
  templateUrl: './formulario-reativo-read.component.html',
  styleUrls: ['./formulario-reativo-read.component.sass']
})
export class FormularioReativoReadComponent implements OnInit {
  todasPessoas: Pessoa[]
  pessoasExibidas: Pessoa[]
  constructor(private fRService: FormularioReativoService) { }
  displayedColumns = ['id', 'nome', 'email', 'idade', 'genero' ,'update', 'delete'];
  ngOnInit(): void {
    this.fRService.read().subscribe((pessoas) =>{
      this.pessoasExibidas = pessoas
      this.todasPessoas = pessoas
    })
  }
  getTotalCount(): number{
    return this.pessoasExibidas?.length
  }
  getMaleCount(): number{
    return this.pessoasExibidas?.filter((e)=> e.genero === "1").length
  }
  getFemaleCount(): number{
    return this.pessoasExibidas?.filter((e)=> e.genero === "2").length
  }
  onGenderSelectorChange(selectedGender: string): void{
    selectedGender === "0" ? this.pessoasExibidas = this.todasPessoas : 
    this.pessoasExibidas = this.todasPessoas.filter((e)=> e.genero === selectedGender)
  }
}