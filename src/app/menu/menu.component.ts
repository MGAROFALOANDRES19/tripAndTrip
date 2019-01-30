import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
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

  elements =  {
    promociones : [], 
    destinos : [], 
    eventos : [],
    gold : [],
    love: [],
    news: []
  }

  public data: Observable<any[]>;

  constructor(
    private router: Router,
    private firebase:FirebaseService
    ) {

      this.callToDatabase("categorias/1", "promociones");
      this.callToDatabase("categorias/2", "eventos");
      this.callToDatabase("categorias/3", "love");
      this.callToDatabase("categorias/4", "destinos");
      this.callToDatabase("categorias/5", "news");
      this.callToDatabase("categorias/6", "gold");

    }

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

    console.log(this.elements);

  }

  callToDatabase(param, word) {
    this.data = this.firebase.getItems(param);
    this.data.subscribe((data) => {
      this.elements[word] = data;
    })
  }

}
