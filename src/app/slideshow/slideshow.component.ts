import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-SlideShow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [NgbCarouselConfig]
})
export class SlideShowComponent implements OnInit {

  public titulo: string;
  public tituloTmp: String = "";
  public items: any[] = [];
  public data: Observable<any[]>;

  public destinos:boolean = false;

  constructor(private config: NgbCarouselConfig, private firebase: FirebaseService, private route: ActivatedRoute) {

    config.interval = 100000;

    this.route.params.subscribe(params => { this.titulo = params.titulo });
    this.urls();
    this.callToDatabase();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.titulo = params['titulo']
      this.callToDatabase()
      this.urls()
    });

  }

  callToDatabase() {
    this.items = [];
    this.data = this.firebase.getItems(this.titulo);
    this.data.subscribe((data) => {
      this.items = data
      
    })
  }

  urls(){
    
    if(this.titulo == "destinos"){
      this.destinos = true
      console.log("hola")
    }

    else{
      this.destinos = false
    }
  }

}