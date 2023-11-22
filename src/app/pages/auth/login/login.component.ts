import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { typeLogin } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authServices: AuthService,
    private router: Router
    ){}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  });

  
  onSubmit(){

    const login1: typeLogin ={
      email : this.loginForm.value.email ||'',
      password: this.loginForm.value.password ||'',
    }

    // 1.Nhận dữ liệu từ form và call API login
    this.authServices.login(login1).subscribe({
      next:(data)=>{
        // 2. lưu thông tin user vào localStorage: setItem(key, dữ liệu dạng string)
        localStorage.setItem('user', JSON.stringify(data));
      },
      error: err=>console.log(err),
        // 3.Di chuyển về màn admin products
      complete:()=>this.router.navigateByUrl("/admin/products")
    })
  }

}
