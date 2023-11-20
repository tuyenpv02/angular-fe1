import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products: Product[] = [];
  constructor(private productServices: ProductsService) {
    this.getLstProducts();
  }
  // lấy list product
  getLstProducts(){
    this.productServices.getProducts().subscribe({
      next:(data) =>{
        this.products = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  // Xóa theo id
  onDelete(id:number){
    if(confirm('bạn muốn xóa không?') && id){
      // nếu có id thì xóa
      this.productServices.deleteProduct(id).subscribe({
        next:(data)=>{console.log(data);
        },
        error:(err)=>console.log(err),
        complete:()=>{
          // cập nhật dữ liệu mới
         this.getLstProducts();
        }
      });
    }
  }
}
