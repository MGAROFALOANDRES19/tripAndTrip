import { Component, OnInit } from '@angular/core';
import {Promocion} from '../slideshow/promocion';
import {TripAndTripService} from '../trip-and-trip.service';


@Component({
  selector: 'app-long-description',
  templateUrl: './long-description.component.html',
  styleUrls: ['./long-description.component.css']
})
export class LongDescriptionComponent implements OnInit { 

  public promociones:Promocion[];

  constructor(  private service:TripAndTripService) { }

  ngOnInit() {
    this.promociones = this.service.getData();
    console.log(this.promociones)
  }

}
