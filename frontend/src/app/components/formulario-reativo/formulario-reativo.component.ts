import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { FormularioReativoService } from './formulario-reativo.service';
import { Pessoa } from './pessoa-model';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.sass']
})
export class FormularioReativoComponent implements OnInit {

  formulario: FormGroup
  baseurl = "http://localhost:3001/pessoas"
  constructor(private formBuilder: FormBuilder, private fRService: FormularioReativoService ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  };

  onSubmit(): void{
    console.log("bateu")
    this.fRService.create(this.formulario.value).subscribe(() =>{
      this.fRService.ShowMessage("Colaborador inserido!")
    })
  }

}
