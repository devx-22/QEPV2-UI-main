import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prelevement {
  id: number;
  circuit: string;
  dp: string;
  programme: string;
  type: string;
  date: string;
  planifies: number;
  realises: number;
  termines: number;
  avancement?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PrelevementService {
  private apiUrl = 'http://localhost:8080/prelevements';

  constructor(private http: HttpClient) {}

  getPrelevements(): Observable<Prelevement[]> {
    return this.http.get<Prelevement[]>(this.apiUrl);
  }
}
