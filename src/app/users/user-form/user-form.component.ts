import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input() users: any;
  @Input() inputUser: any;

  //Định nghĩa pthuc bắn ngược dữ liệu lại cho cha
  @Output() handleSubmit:EventEmitter<any> ;
  constructor(){
    this.handleSubmit = new EventEmitter();
  }

  onSubmit(userForm: NgForm){
    // bắn dữ liệu, tương tự input nhưng ngược lại
    if(!userForm.valid){
      alert('nhập lại form');
      return;
    }
    this.handleSubmit.emit(userForm.value);
    userForm.resetForm({id:0, name:'', age:''});
  }
  
}
