import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  users=[
    {id:1, name:'tuyen', age:7},
    {id:10, name:'văn tú', age:20},
  ];

  inputUser = {
    id:0,
    name:'tuyênphamj',
    age:22
  };

  onSubmit(userForm: NgForm, key:string){
    if(!userForm.valid){
      alert('thiếu dữ liệu');
      return;
    }
    // -------------------
    if(key =='add'){
       // lấy id max
      const newUsersId = this.users
      .map((u: { id: any; }) => u.id) // lấy ra mảng mới chỉ có id
      .sort((a: number, b: number)=> b - a); // sort id đag có theo chiều giảm dần
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
    // -------------------
    if(key =='update' && userForm.value.id != 0){
    const x = this.users.findIndex((u: { id: any; })=>u.id == userForm.value.id);
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
