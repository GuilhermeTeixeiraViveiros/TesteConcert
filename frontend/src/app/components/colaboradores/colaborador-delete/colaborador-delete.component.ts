import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ColaboradorService } from '../../colaboradores/colaborador.service';
import { Colaborador } from '../colaborador-model';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.sass']
})
export class ColaboradorDeleteComponent implements OnInit {
  id: string
  colaborador: Colaborador
  constructor(private spinnerService: NgxSpinnerService, private colaboradorService : ColaboradorService, private router: Router, 
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      this.colaboradorService.readById(this.id).subscribe(colaborador =>{
        this.colaborador = colaborador
    });
  }
  
deleteColaborador(): void{
  this.mostrarCarregando();
  this.colaboradorService.delete(this.id).subscribe(()=>{
    this.colaboradorService.ShowMessage('Colaborador excluído')
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




