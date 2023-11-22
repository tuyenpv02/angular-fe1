import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent {

  id: string ;
  productForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ])
  });;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productServices: ProductsService 
  ){
    // lấy id edit
    this.id = activeRoute.snapshot.params['id'];

    // lấy detail product theo id
      productServices.getProductById(this.id).subscribe({
      next:(data)=> {
        // gán thông tin vào form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.productForm.patchValue({
          name:data.name
        });
      },
      error:(err)=>console.log(err)
    });
  }

  onSubmit(){
     // . call api (cần định nghĩa lại services và router điều hướng)
     const product: IProduct ={
      id:this.id,
      name:this.productForm.get('name')?.value || '',
    }
    this.productServices.editProduct2(product).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>console.log(err),
      complete:()=>{
        this.router.navigateByUrl('/admin/products')
      }
    });
  }

}
