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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(0%)' })),
      transition('* => *', animate(300))
  ])]

})
export class MenuComponent implements OnInit {

  public links:Array<String>;
  status: string = 'right';

  constructor() { 
    this.links = [
			"Promociones",
			"Destinos",
			"Eventos",
			"Gold Trip",
			"Love trip",
			"News"
		];
  }

  showMenu () {
    this.status = this.status === 'left' ? 'right' : 'left';
  }

  ngOnInit() {


  }

}
