import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(-100%)', display:'none'})),
      state('right', style({ transform: 'translateX(0%)', display: 'block'})),
      transition('* => *', animate(300))
    ])]
})
export class HeaderComponent implements OnInit {

  public status:string = "left";

  constructor() { 
    
  }

  ngOnInit() {
  }

  showMenu(){
    this.status = this.status === 'left' ? 'right' : 'left'; 
  }

  changePage(){
    this.status = this.status === 'left' ? 'right' : 'left'; 
  }

}
