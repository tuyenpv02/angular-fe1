import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/IProduct';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // http sẽ cung cấp các phương thức đề tương API
  constructor(private http: HttpClient) { }
  // API URL
  API = 'http://localhost:3000/products';
  
  // Observable sẽ cung cấp kiểu xử lý bất đồng bộ để phía component lắng nghe
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }


}
