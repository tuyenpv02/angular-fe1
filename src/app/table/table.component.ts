import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  // @Input() champions: any;
  @Input('champions') champs: any;
  @Input() name?:string;
  @Input() price?:number;
  

  show():void{
    console.log(this.price);
  }
  

}
