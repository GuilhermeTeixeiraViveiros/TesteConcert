import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioReativoService } from '../formulario-reativo.service';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.sass']
})
export class FormularioReativoComponent implements OnInit {

  formulario: FormGroup
  constructor(private formBuilder: FormBuilder, private fRService: FormularioReativoService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      idade: new FormControl(null),
      genero: new FormControl('')
    });
  };
  
  onSubmit(formDirective: FormGroupDirective): void {
    this.fRService.create(this.formulario.value).subscribe(() => {
      formDirective.resetForm();
      this.fRService.ShowMessage("Pessoa inserida!")
      this.formulario.reset()
      this.router.navigate(["/formulario-reativo"])
    })

  }
  cancelar() {
    this.formulario.reset()
    this.router.navigate(["/formulario-reativo"])
  }

}