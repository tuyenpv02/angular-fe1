import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent {
  productForm : FormGroup;

  constructor(
    private productServices: ProductsService, // cung cấp API
    private router: Router // cung cấp điều hướng
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        this.onValidateHasProduct // Tên custom validate
      ])
    });
  }
  
  // Custom validate
  onValidateHasProduct(control: AbstractControl): ValidationErrors |null{
    // 1. lấy ra value của FormControl name hiện tại
    const {value} = control;
    // 2. kiểm tra điều kiện chứa từ khóa 'product'
    if(!value.includes('product')){
      return {hasProductError: true};
    }
    // 3. trả về kq nếu không lỗi
    return null;
  }
  
  // Submit form
  onSubmit(){
    // 1. lấy dữ liệu từ form
    const submitData = this.productForm.value;
    // 2. call api (cần định nghĩa lại services và router điều hướng)
    this.productServices.createProduct(submitData).subscribe(
    {
      next:(data)=>{},
      error: (err)=>console.log(err),
      complete:()=>{
        // điều hướng router về danh sách
        this.router.navigateByUrl('/admin/products')
      }
    });
  }
}
