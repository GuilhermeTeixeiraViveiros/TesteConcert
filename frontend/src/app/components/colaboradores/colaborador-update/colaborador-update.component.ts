import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador-model';
import { NgxSpinnerService } from 'ngx-spinner';

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

  setores: string[] = ['RH','TI','Secretaria','Diretoria']
  
  constructor(private spinnerService: NgxSpinnerService, private colaboradorService : ColaboradorService, private router: Router, 
    private route: ActivatedRoute) { }
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.colaboradorService.readById(id).subscribe(colaborador =>{
        this.colaborador = colaborador
    });
  }

  updateColaborador(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
    this.colaboradorService.update(this.colaborador).subscribe(()=>{
      this.colaboradorService.ShowMessage('Colaborador atualizado!')
    })
    this.router.navigate(['/colaboradores'])
  }

  cancel(): void{
    this.router.navigate(['/colaboradores'])
  }
}
