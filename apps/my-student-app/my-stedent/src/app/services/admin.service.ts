import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private requestType = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

  getAllAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.requestType}`);
  }
}
