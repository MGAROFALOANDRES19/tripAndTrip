import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public url:String;
  public gold:boolean = false;

  constructor(private route:ActivatedRoute) { 

    this.route.url.subscribe(url =>{
      this.url = url.toString()
 });

  }

  ngOnInit() {
  
    if (this.url = "gold-trip"){
      this.gold = true;
    }
  }

  showMenu(){
    this.status = this.status === 'left' ? 'right' : 'left'; 
  }

  changePage(){
    this.status = this.status === 'left' ? 'right' : 'left'; 
  }

}
