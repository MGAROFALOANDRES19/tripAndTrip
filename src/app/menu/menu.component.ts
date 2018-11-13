import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
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
    trigger('light', [
      state('dark', style({ background:'rgba(0,0,0,0.5)' })),
      state('light', style({ background:'transparent' })),
      transition('* => *', animate(300))
    ])]

})
export class MenuComponent implements OnInit {
  
  public status: { [id: string]: string } = {
    "promociones": 'dark',
    "destinos": 'dark',
    "eventos": 'dark',
    "gold-trip": 'dark',
    "love-trip": 'dark',
    "news": 'dark',
}


  constructor(
    private router: Router
    ) {}

  goTo(link:String){
    this.status[''+link] = this.status[''+link] === 'dark' ? 'light' : 'dark';
    setTimeout(() => {
       this.router.navigate(['/'+link]);
       this.status[''+link] = this.status[''+link] === 'dark' ? 'light' : 'dark';
    }, 1000);
}

  ngOnInit() {


  }

}
