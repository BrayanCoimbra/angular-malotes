import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Malote } from '../models/malote';

@Injectable({
  providedIn: 'root'
})
export class MaloteService {

  private apiUrl = 'http://localhost:8080/malotes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Malote[]> {
    return this.http.get<Malote[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Malote> {
    return this.http.get<Malote>(`${this.apiUrl}/${id}`);
  }

  criar(malote: Malote): Observable<Malote> {
    return this.http.post<Malote>(this.apiUrl, malote);
  }

  atualizar(id: number, malote: Malote): Observable<Malote> {
    return this.http.put<Malote>(`${this.apiUrl}/${id}`, malote);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
