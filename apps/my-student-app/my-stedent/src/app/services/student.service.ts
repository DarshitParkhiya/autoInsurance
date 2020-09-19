import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private requestType = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) {}

  getAllAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.requestType}`);
  }

  getStudentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.requestType}/getByID?id=${id}`);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.requestType, student, httpOptions);
  }

  authenticateSutdent(emailId: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.requestType}/auth`,
      { emailId, password },
      httpOptions
    );
  }
}
