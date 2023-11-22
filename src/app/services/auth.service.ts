import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { typeLogin, typeLoginResponse } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(data: typeLogin): Observable<typeLoginResponse>{
    return this.http.post<typeLoginResponse>(`${this.API}`, data);
  }
  

}
