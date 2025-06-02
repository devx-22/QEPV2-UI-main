import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Programme } from '../models/programme.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgrammeService {
  private apiUrl = environment.apiUrl + '/api/programmes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.apiUrl);
  }

  create(data: Programme): Observable<Programme> {
    return this.http.post<Programme>(this.apiUrl, data);
  }
}
