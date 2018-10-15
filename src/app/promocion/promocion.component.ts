import { Component, OnInit } from '@angular/core';
import { Promocion } from './promocion';
import { TripAndTripService } from '../trip-and-trip.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css'],
  providers: [NgbCarouselConfig]
})
export class PromocionComponent implements OnInit {

  public promocion:Promocion;
  public promociones:Array<Promocion>;
  public form:boolean;
  public promSelected:number;

  constructor(private _tripAndTripService:TripAndTripService, config: NgbCarouselConfig) { 
    config.interval = 60000;
    this.form = false;
  }

  ngOnInit() {
    this.promociones = [];
    this._tripAndTripService.getPromociones().subscribe((data: Array<Promocion>) => {
      this.promociones = data;
    console.log(this.promociones)
      
  });
  
  }

  showForm(id:number){
    this.form = true;
    this.promSelected = id;
    console.log(this.form)
  }

  }