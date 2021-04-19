import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador-model';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.sass']
})
export class ColaboradorUpdateComponent implements OnInit {
  colaborador: Colaborador = {
    nome: '',
    nascimento: null,
    CPF: '',
    genero: '',
    ativo: false,
    setor: ''
  }
  datepickerConfig: Partial<BsDatepickerConfig>
  setores: string[] = ['RH','TI','Secretaria','Diretoria']
  
  constructor(private spinnerService: NgxSpinnerService, private colaboradorService : ColaboradorService, private router: Router, 
    private route: ActivatedRoute) { 
      this.datepickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    })}
    ngOnInit(): void {
     
      this.obterColaboradorPorId();
  }

  updateColaborador(): void{
    this.mostrarCarregando();
    this.atualizarColaborador();
  }

  private obterColaboradorPorId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.colaboradorService.readById(id).subscribe(colaborador => {
      this.colaborador = colaborador;
    });
  }

  private atualizarColaborador() {
    this.colaboradorService.update(this.colaborador).subscribe(() => {
      this.colaboradorService.ShowMessage('Colaborador atualizado!');
      this.router.navigate(['/colaboradores']);
    });
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
