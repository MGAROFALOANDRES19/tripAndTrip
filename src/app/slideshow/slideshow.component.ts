import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public titulo:string;
  public tituloTmp:String = "";
  public data:Observable<any[]>;
  public items: any[] = [];
  public form:boolean;
  public promSelected:number;

  constructor(private config: NgbCarouselConfig, private db: AngularFireDatabase, private route: ActivatedRoute) { 

    config.interval = 100000;

    this.form = false;    
    this.route.params.subscribe( params => {this.titulo = params.titulo} );
  
    this.data = this.db.list(this.titulo).valueChanges();    
  }

  ngOnInit() {
    this.data.subscribe((data) => {
      this.items = data
    })
  }

  showForm(id:number){
    this.form = true;
    this.promSelected = id-1;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  }