import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
import { BootstrapOptions } from '@angular/core/src/application_ref';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-goldtrip',
  templateUrl: './goldtrip.component.html',
  styleUrls: ['./goldtrip.component.css']
})
export class GoldtripComponent implements OnInit {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  private data:Observable<any>;
  items:any[];

  constructor(private config: NgbCarouselConfig, private firebase: FirebaseService, private titleService: Title) {

    config.interval = 100000;

    this.callToDatabase()

    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.setTitle("Trip and Trip | GoldTrip")
  }

  callToDatabase() {
    this.items = [];
    this.data = this.firebase.getItems("gold trip");
    this.data.subscribe((data) => {
      this.items = data
      
    })
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {

    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
      let element= document.getElementsByClassName("carousel-control-prev");
      for (let i = 0; i < element.length; i++) {
        let el = element[i];
        var c = (element[i] as HTMLElement).click();
    }
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      let element= document.getElementsByClassName("carousel-control-next");
      for (let i = 0; i < element.length; i++) {
        let el = element[i];
        var c = (element[i] as HTMLElement).click();
    }
    }

    // toggle avatar visibility
    //this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }


}
