import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormularioReativoService } from '../formulario-reativo.service';
import { Pessoa } from '../pessoa-model';

@Component({
  selector: 'app-formulario-reativo-update',
  templateUrl: './formulario-reativo-update.component.html',
  styleUrls: ['./formulario-reativo-update.component.sass']
})
export class FormularioReativoUpdateComponent implements OnInit {

  constructor(private spinnerService: NgxSpinnerService, private formBuilder: FormBuilder, 
    private fRService: FormularioReativoService, private router: Router, private route: ActivatedRoute) { }

  pessoa: Pessoa
  
  formulario = new FormGroup({
    nome: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    idade: new FormControl(null),
    genero: new FormControl(''),
    id: new FormControl(null),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    this.fRService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa
      this.formulario.patchValue({
        nome: pessoa.nome,
        email: pessoa.email,
        idade: pessoa.idade,
        id: pessoa.id,
        genero: pessoa.genero
      })
    })
  }

  onSubmit(formDirective: FormGroupDirective): void {
    this.mostrarCarregando();
    this.atualizaPessoa(formDirective);
  }

  private atualizaPessoa(formDirective: FormGroupDirective) {
    this.fRService.update(this.formulario.value).subscribe(() => {
      formDirective.resetForm();
      this.fRService.ShowMessage("Pessoa atualizada!");
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