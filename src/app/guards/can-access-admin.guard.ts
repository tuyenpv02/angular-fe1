import { inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';

export const canAccessAdminGuard: CanActivateFn = (route, state) => {
  // const router = new Router();
const router = inject(Router);

  // 1.lấy ra thông tin người dùng đã đăng nhập
  const loginUser = localStorage.getItem('user');
  // 2.kiểm tra nếu có thì cho vào admin
  if(loginUser){
    return true;
  }else{
  // 3.nếu k thì quay về màn login
  router.navigateByUrl('/auth/login')
  return false;
  }

};


