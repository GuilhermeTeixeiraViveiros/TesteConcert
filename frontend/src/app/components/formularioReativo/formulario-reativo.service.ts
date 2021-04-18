import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pessoa } from './pessoa-model';
@Injectable({
  providedIn: 'root'
})
export class FormularioReativoService {

  baseurl = "http://localhost:3001/pessoas"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }



  create(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.baseurl, pessoa).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)))
  }

  read(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseurl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }

  readById(id: string): Observable<Pessoa> {
    const url = `${this.baseurl}/${id}`
    return this.http.get<Pessoa>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.baseurl}/${pessoa.id}`
    return this.http.put<Pessoa>(url, pessoa).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }
  
  delete(id: string): Observable<Pessoa> {
    const url = `${this.baseurl}/${id}`
    return this.http.delete<Pessoa>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }
  
  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.ShowMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  ShowMessage(msg: string, isError: boolean = false){
    this.snackbar.open(msg, '', {
      duration : 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
}
