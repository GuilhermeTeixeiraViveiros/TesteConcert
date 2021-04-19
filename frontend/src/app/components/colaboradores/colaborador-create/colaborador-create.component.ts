import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Router } from '@angular/router'
import { Colaborador } from '../colaborador-model';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.sass']
})
export class ColaboradorCreateComponent implements OnInit {

  datepickerConfig: Partial<BsDatepickerConfig>
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

  constructor(private spinnerService: NgxSpinnerService, private colaboradorService: ColaboradorService, private router: Router) { 
    this.datepickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    })
  }

  ngOnInit(): void {
  }
  
  createColaborador(): void{
    this.mostrarCarregando();
    
    this.colaboradorService.create(this.colaborador).subscribe(()=>{
      this.colaboradorService.ShowMessage("Colaborador inserido!")
      this.router.navigate(['/colaboradores'])
    })
  }

  private mostrarCarregando() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
  }

  cancel(): void{
    this.router.navigate(['/colaboradores']) 
  }
}
