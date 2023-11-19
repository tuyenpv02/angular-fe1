import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  inputUser = {
    id:0,
    name:'tuyend',
    age:22
  }
  users=[
    {id:1, name:'tuyen', age:7},
    {id:10, name:'văn tú', age:20},
  ]

  onSubmit(userForm: NgForm, key:string){
    if(!userForm.valid){
      alert('thiếu dữ liệu');
      return;
    }
    if(key =='add'){
       // lấy id max
      const newUsersId = this.users
      .map(u => u.id) // lấy ra mảng mới chỉ có id
      .sort((a, b)=> b - a); // sort id đag có theo chiều giảm dần
      const idMax = newUsersId[0];
      //push dữ liệu vào lst
      this.users.push({
        ...userForm.value // lấy tất cả dữ liệu của formData và ở dưới thêm id
        ,id:idMax +1
      });
      // cập nhật lại form
      userForm.resetForm({ // cập nhật form về giá trị default
          name:'',
          age:0,
          id:0
        });
    }
   if(key =='update' && userForm.value.id != 0){
    console.log(22);
    
    const x = this.users.findIndex((u)=>u.id == userForm.value.id);
    this.users[x] = userForm.value;
    userForm.resetForm({
      name:'',
      age:0,
      id:0,
    });
   }
  }

  deleteUser(id:number){
    this.users.splice(id, 1);
  }

  editUser(id:number){
    this.inputUser = this.users[id];
  }

}
