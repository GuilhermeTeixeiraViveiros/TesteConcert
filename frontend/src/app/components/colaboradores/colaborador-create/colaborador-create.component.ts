import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Router } from '@angular/router'
import { Colaborador } from '../colaborador-model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.sass']
})
export class ColaboradorCreateComponent implements OnInit {
  options = [
    { name: "option1", value: 1 },
    { name: "option2", value: 2 }
  ]

  selectedOption = ''
  colaborador: Colaborador = {
    nome: '',
    nascimento: null,
    CPF: '',
    genero: '',
    ativo: false,
    setor: ''
  }
  
  setores: string[] = ['RH','TI','Secretaria','Diretoria']

  constructor(private spinnerService: NgxSpinnerService, private colaboradorService: ColaboradorService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createColaborador(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
    this.colaboradorService.create(this.colaborador).subscribe(()=>{
      this.colaboradorService.ShowMessage("Colaborador inserido!")
    })
    this.router.navigate(['/colaboradores'])
  }

  cancel(): void{
    this.router.navigate(['/colaboradores']) 
  }
}
