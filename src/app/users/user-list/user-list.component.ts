import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() users: any;
  @Output() handleEdit = new EventEmitter();
  @Output() handleRemove = new EventEmitter();

  
  onEdit(userId: number){
    this.handleEdit.emit(userId);
  }

  onRemove(userId: number){
    this.handleRemove.emit(userId);
  }
 
}
