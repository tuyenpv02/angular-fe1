import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductCart } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent {
  // 1. phải lấy được id trên url
  // 2. sử dụng id đó để call API lấy chi tiết product\
  id !: string;
  product !:IProduct;
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

  // cart
  cartValue:number = 1;
  onChangeCartValue(ev: any){
    this.cartValue = ev.target.value;
  }

  addToCart(){
    // định nghĩa sp trong giỏ hàng có cấu trúc gì
    const addItem = {
      ...this.product,
      value: +this.cartValue
    }

    // Nghiệp vụ thêm giỏ hàng
    // 1.Lấy ra ds sp trong giỏ hàng
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // 2.kiểm tra trong giỏ có sp trùng không
    const existItem = cartItems.find(
      (item: IProductCart)=> item.id == addItem.id);
    // 
    if(!existItem){
      cartItems.push(addItem);
    }else{
      // vì hàm find() lấy ra phần tử và liên kết vs nó
      // nên khi thay đổi item đc lấy ra thì trong mảng cũng thay đổi theo
      existItem.value += addItem.value;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartValue = 1;

    }


}
