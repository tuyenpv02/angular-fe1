import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  users=[
    {id:1, name:'tuyen', age:7},
    {id:10, name:'văn tú', age:20},
  ];

  formValue = {
    id:0,
    name:'',
    age:0
  };

  onCreateUser(userForm: any){
    
    if(userForm.id === 0){
      const newUsersId = this.users.map((u) => u.id).sort((a, b)=> b - a); 
      const idMax = newUsersId[0];
      console.log(idMax);
      
       this.users.push({
        ...userForm,
        id: idMax +1
      });
      return ;
    }
    //Chỉnh sửa

  }

  onEdit(userId: number){
    const editUser = this.users.find(user =>user.id == userId);
    if(editUser){
      this.formValue = {...editUser};
    }
  }

  onDelete(userId: number){
    if(!confirm('you want to delete ')) return;
    this.users = this.users.filter(user => user.id !== userId);
    // const idDelete = this.users.findIndex(user =>user.id === userId);
    // this.users.splice(idDelete,1);
  }
  
}
