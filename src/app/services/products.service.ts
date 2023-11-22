import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductCreate } from '../interface/IProduct';
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
  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  deleteProduct(id: string|number):Observable<any>{
    return this.http.delete(`${this.API}/${id}`);
  }

  createProduct(product: IProductCreate): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API}`, product);
  }

  editProduct(product: IProduct, id:string): Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API}/${product.id}`, product);
  }

  editProduct2(product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API}/${product.id}`, product);
  }
}
