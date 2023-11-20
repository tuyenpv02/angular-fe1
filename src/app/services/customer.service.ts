import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../interface/ICustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  API='http://localhost:8080/api/khach-hang';
  constructor(private http:HttpClient) { }

  getCustomers():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.API);
  }
}
