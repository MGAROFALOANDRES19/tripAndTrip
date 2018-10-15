import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripAndTripService {

  public url: string;

	constructor(private _http:HttpClient){
		this.url = "http://localhost:3000";
	}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPromociones() {
		return this._http.get(this.url + '/promociones');
	}
	}
  

