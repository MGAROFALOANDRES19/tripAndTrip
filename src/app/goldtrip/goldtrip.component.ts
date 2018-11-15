import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
import { BootstrapOptions } from '@angular/core/src/application_ref';

@Component({
  selector: 'app-goldtrip',
  templateUrl: './goldtrip.component.html',
  styleUrls: ['./goldtrip.component.css']
})
export class GoldtripComponent implements OnInit {

  private data:Observable<any>;
  private items:any[];

  constructor(private config: NgbCarouselConfig, private firebase: FirebaseService) {

    config.interval = 100000;

    this.callToDatabase()

    config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

  callToDatabase() {
    this.items = [];
    this.data = this.firebase.getItems("gold trip");
    this.data.subscribe((data) => {
      this.items = data
      
    })
  }


}
