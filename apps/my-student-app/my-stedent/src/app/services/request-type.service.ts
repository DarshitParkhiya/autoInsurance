import { Injectable } from '@angular/core';
import { RequestType } from '../models/requestType';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestModel } from '../models/requestModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class RequestTypeService {
  private requestType = 'http://localhost:5000/api/RequestType';
  private request = 'http://localhost:5000/api/Request';

  constructor(private http: HttpClient) {}

  getAllRequestType(): Observable<RequestType[]> {
    return this.http.get<RequestType[]>(`${this.requestType}/get`);
  }

  getRequestByType(type: string): Observable<RequestType> {
    return this.http.get<RequestType>(
      `${this.requestType}/getByType?type=${type}`
    );
  }

  getAllRequest(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(`${this.request}/get`);
  }

  createRequest(alarm: RequestModel): Observable<RequestModel> {
    return this.http.post<RequestModel>(
      `${this.request}/create`,
      alarm,
      httpOptions
    );
  }
}
