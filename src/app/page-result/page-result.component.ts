import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Promocion } from '../slideshow/promocion';

@Component({
  selector: 'app-PageResult',
  templateUrl: './page-result.component.html',
  styleUrls: ['./page-result.component.css'],
})
export class PageResultComponent implements OnInit {

  public promociones: Observable<any[]>;
  public destinos: Observable<any[]>;
  public eventos: Observable<any[]>;
  public goldenTrip: Observable<any[]>;
  public loveTrip: Observable<any[]>;

  public keywords:string[];

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {

    this.route.params.subscribe(params => { this.keywords = params.getAll('keywords') });
    console.log(this.keywords);
  }

  ngOnInit() {
    this.filterSearch()
  }

  public filterSearch(): void {
  
    console.log("HOLA" + this.promociones);
  }

}