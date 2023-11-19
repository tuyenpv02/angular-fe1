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

  onCreateUser(event: any){
    console.log(event);
    // this.users.push(event)
  }

  onEdit(userId: number){
    const editUser = this.users.find(user =>user.id == userId);
    if(editUser){
      this.formValue = {...editUser};
    }
  }

  onDelete(userId: number){
    if(!confirm('you want to delete ')) return;
    const idDelete = this.users.findIndex(user =>user.id === userId);
    this.users.splice(idDelete,1);
  }
  
}
