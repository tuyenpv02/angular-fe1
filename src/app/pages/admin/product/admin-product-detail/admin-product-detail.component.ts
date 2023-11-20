import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent {
  // 1. phải lấy được id trên url
  // 2. sử dụng id đó để call API lấy chi tiết product
  product !:IProduct;
  id !: string;
  constructor(
    private activateRoute: ActivatedRoute, // lấy dữ liệu từ tham số trên url
    private productServices: ProductsService // gọi api
  ) {
    this.id = activateRoute.snapshot.params['id'];
    
    this.productServices.getProductById(this.id).subscribe({
    next:(data)=>this.product = data,
    error:(err)=>console.log(err)
  });    
  }
}
