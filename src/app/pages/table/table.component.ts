import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 
  formChamp = {
    name:'',
    dame:'',
    defend:'',
    speed:'',
    price:'',
    img:'',
  }

  // Nhận biến từ component cha
  // @Input() champions: any;
  @Input('champions') champs: any;
  @Input() name?:string;
  @Input() price?:number;

  // ẩn hiện table
  showStatus = true;
  onClickBtn(){
    this.showStatus = !this.showStatus;
    console.log(this.showStatus);
  }
  
  // gán giá trị cho form ( key phải để string sẽ k lỗi)
  onInput(event:any, key:'name'|'dame'|'defend'|'speed'|'img'|'price'){
    this.formChamp[key]=event.target.value;
  }
  
  // add vào lst champs
  onSubmit(){
    console.log(this.formChamp);

    this.champs.push({
      ...this.formChamp,
      dame: +this.formChamp.dame,
      defend: +this.formChamp.defend,
      speed: +this.formChamp.speed,
      price: +this.formChamp.price,
    });
  }
 
  // detail
  checkEdit = false;
  index=0;
  detail(i: number){
    this.formChamp = this.champs[i];
    this.checkEdit = true;
    this.index=i;
  }
  onUpdate(){
    this.checkEdit = false;
    // this.champs[this.index] = this.formChamp;
    // this.champs.push({
    //   ...this.formChamp,
    //   dame: +this.formChamp.dame,
    //   defend: +this.formChamp.defend,
    //   speed: +this.formChamp.speed,
    //   price: +this.formChamp.price,
    // });
  }

}
