import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent {
  @Input() champ:any;
  
}
