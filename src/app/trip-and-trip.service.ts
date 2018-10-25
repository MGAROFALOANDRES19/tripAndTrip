import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TripAndTripService {

  public data:any[];

	constructor(){
	}

 getData() {
    return this.data
  }

setData(data:any[]) {
    this.data = data;
  }
	}
  

