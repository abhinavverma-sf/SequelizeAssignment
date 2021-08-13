import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
  
export class DataService {
  
  private baseURL='http://localhost:8081/members';

  constructor(private httpClient:  HttpClient) { }
  readAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/members&customer`);
  }

  read(id): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/${id}`);
  }

  create(data): Observable<User[]> {
    return this.httpClient.post<User[]>(this.baseURL, data);
  }

  update(id, data: User): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/editMember&Customer/${id}`, data, {responseType: 'text'});
  }

  delete(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(`${this.baseURL}/deleteFromBoth/${id}`);
  }

  deleteAll(): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.baseURL);
  }

  searchByName(name): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}?name=${name}`);
  }
}
