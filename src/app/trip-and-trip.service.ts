import { Injectable } from '@angular/core';
import { Promocion } from './slideshow/promocion';

@Injectable({
  providedIn: 'root'
})
export class TripAndTripService {

  public static data:Promocion[];

	constructor(){
	}

 public static getData() {
    return this.data
  }

public static setData(data:Promocion[]) {
    this.data = data;
  }
	}
  

