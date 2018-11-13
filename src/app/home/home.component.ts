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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('down', style({ transform: 'translateY(0%)', display:'none' })),
      state('up', style({ transform: 'translateY(-112%)', display:'block' })),
      transition('* => *', animate(300))
    ])]
})
export class HomeComponent implements OnInit {

  public status: string = "down";
  public showed: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  showMenu() {
    this.showed = this.showed == true ? false : true;
    this.status = this.status === 'down' ? 'up' : 'down';
  }
  

}
