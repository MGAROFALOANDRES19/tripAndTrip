import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public links:Array<String>;

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

  ngOnInit() {
  }

}
