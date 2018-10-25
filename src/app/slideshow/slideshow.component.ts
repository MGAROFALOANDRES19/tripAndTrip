import { Component, OnInit } from '@angular/core';
import { Promocion } from './promocion';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-SlideShow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [NgbCarouselConfig]
})
export class SlideShowComponent implements OnInit {

  public promocion:Promocion;
  public data:Observable<any[]>;
  public promociones: Promocion[] = [];
  public form:boolean;
  public promSelected:number;

  constructor(private config: NgbCarouselConfig, private db: AngularFireDatabase) { 
    
    config.interval = 100000;

    this.form = false;    
    this.data = this.db.list('promociones').valueChanges();    
  }

  ngOnInit() {
    this.data.subscribe((promociones) => {
      this.promociones = promociones
    })
  }

  showForm(id:number){
    this.form = true;
    this.promSelected = id-1;
  }

  }