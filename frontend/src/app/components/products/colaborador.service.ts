import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Colaborador } from './colaborador-model';
@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseurl = "http://localhost:3001/colaboradores"
  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  create(colaborador: Colaborador): Observable<Colaborador>{
    return this.http.post<Colaborador>(this.baseurl, colaborador).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)))
  }

  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.baseurl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }

  readById(id: string): Observable<Colaborador> {
    const url = `${this.baseurl}/${id}`
    return this.http.get<Colaborador>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }

  update(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.baseurl}/${colaborador.id}`
    return this.http.put<Colaborador>(url, colaborador).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e)));
  }
  
  delete(id: string): Observable<Colaborador> {
    const url = `${this.baseurl}/${id}`
    return this.http.delete<Colaborador>(url).pipe(map((obj) => obj),
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
