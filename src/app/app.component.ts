import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16';
  champs = [
    {
      name:'nam 1',
      dame:400,
      defend:250,
      speed:200,
      price: 6300,
      img:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg'
    },
    {
      name:'nam 2',
      dame:400,
      defend:250,
      speed:200,
      price: 6300,
      img:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg'
    }
  ];


}
