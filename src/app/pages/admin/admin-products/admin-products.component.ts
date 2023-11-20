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
    this.productServices.getProducts().subscribe({
      next:(data) =>{
        this.products = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
