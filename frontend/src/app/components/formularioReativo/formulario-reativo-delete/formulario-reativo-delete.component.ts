import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormularioReativoService } from '../formulario-reativo.service';
import { Pessoa } from '../pessoa-model';

@Component({
  selector: 'app-formulario-reativo-delete',
  templateUrl: './formulario-reativo-delete.component.html',
  styleUrls: ['./formulario-reativo-delete.component.sass']
})
export class FormularioReativoDeleteComponent implements OnInit {

  constructor(private spinnerService: NgxSpinnerService, private formBuilder: FormBuilder, private fRService: FormularioReativoService,
    private router: Router, private route: ActivatedRoute) { }

  pessoa: Pessoa
  formulario: FormGroup = this.formBuilder.group({
    nome: [{value: null, disabled: true }],
    email: [{value: null, disabled: true }],
    idade: [{value: null, disabled: true }],
    id: [{value: null, disabled: true }]
  })

  ngOnInit(): void {
    this.ObterPessoaPorId();
  }

  private ObterPessoaPorId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fRService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
      this.formulario.patchValue({
        nome: pessoa.nome,
        email: pessoa.email,
        idade: pessoa.idade,
        id: pessoa.id
      });
    });
  }

  onSubmit(formDirective: FormGroupDirective): void {
    this.mostrarCarregando();
    this.deletaPessoa(formDirective);
  }
  
  private deletaPessoa(formDirective: FormGroupDirective) {
    const id = this.formulario.controls['id'].value;
    this.fRService.delete(id).subscribe(() => {
      formDirective.resetForm();
      this.fRService.ShowMessage("Pessoa excluída!");
      this.formulario.reset();
      this.router.navigate(["/formulario-reativo"]);
    });
  }

  private mostrarCarregando() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 500);
  }

  cancelar() {
    this.formulario.reset()
    this.router.navigate(["/formulario-reativo"])
  }
}



