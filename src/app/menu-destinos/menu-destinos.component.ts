import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Title }  from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-menu-destinos',
  templateUrl: './menu-destinos.component.html',
  styleUrls: ['./menu-destinos.component.css'],
  animations: [
    trigger('light', [
      state('dark', style({ background:'rgba(0,0,0,0.5)' })),
      state('light', style({ background:'transparent' })),
      transition('* => *', animate(300))
    ])]
})
export class MenuDestinosComponent implements OnInit {
  public status: { [id: string]: string } = {
    "caribe": 'dark',
    "norteAmerica": 'dark',
    "centroAmerica": 'dark',
    "surAmerica": 'dark',
    "europa": 'dark',
    "restoMundo": 'dark',
}


  constructor(
    private router: Router,
    private titleService:Title
    ) {}

  goTo(link:String){
    this.status[''+link] = this.status[''+link] === 'dark' ? 'light' : 'dark';
    setTimeout(() => {
       this.router.navigate(['/'+link]);
       this.status[''+link] = this.status[''+link] === 'dark' ? 'light' : 'dark';
    }, 1000);
}

  ngOnInit() {

    window.onload = function(){
      console.log("yes")
    }

    this.setTitle("Trip and Trip | Destinos")

  }


  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }



}
