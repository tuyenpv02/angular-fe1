import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent {
  productFrom : FormGroup;

  constructor() {
    this.productFrom = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  
  
  // Submit form
  onSubmit(){
console.log(this.productFrom.get('name'));

  }
}
