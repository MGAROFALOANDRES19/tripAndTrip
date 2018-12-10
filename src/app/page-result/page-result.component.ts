import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service'
import { Observable, from } from 'rxjs';
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

  public keyword: String;
  public items: any[] = [];
  public itemsFounds: any[] = []
  public data: Observable<any[]>;

  constructor(private firebase: FirebaseService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => { this.keyword = params.keyword });
    this.callToDatabase('promociones');
    this.callToDatabase('eventos');
    this.callToDatabase('destinos');
    this.callToDatabase('love trip');
    this.callToDatabase('gold trip');
  }

  ngOnInit() {

  }

  callToDatabase(type:String) {
    this.items = [];

    this.data = this.firebase.getItems(type);
    this.data.subscribe((data) => {
      this.items = data
      this.find(this.keyword, type);

    })

  }

  find(keyword: String, type: String) {
    for (let item of this.items) {
      try {
        for (let tag of item['tags']) {
          if (tag == keyword) {
            item.type = type
            this.itemsFounds.push(item)
          }
        }
      }
      catch (e) {
        console.log(e)
      }
    }
  }

}