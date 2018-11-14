import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';

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
  public form: boolean;
  public promSelected: number;
  public data: Observable<any[]>;

  constructor(private config: NgbCarouselConfig, private firebase: FirebaseService, private route: ActivatedRoute) {

    config.interval = 100000;

    this.form = false;
    this.route.params.subscribe(params => { this.titulo = params.titulo });
    this.callToDatabase()

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.titulo = params['titulo']
      this.callToDatabase()
    });

  }

  callToDatabase() {
    this.items = [];
    this.data = this.firebase.getItems(this.titulo);
    this.data.subscribe((data) => {
      this.items = data
      
    })
  }

  showForm(id: number) {
    this.form = true;
    this.promSelected = id - 1;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}