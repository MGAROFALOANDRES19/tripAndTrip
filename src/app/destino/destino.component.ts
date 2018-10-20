import { Component, OnInit } from '@angular/core';
import { Destino } from './destino';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css'],
  providers: [NgbCarouselConfig]
})
export class DestinoComponent implements OnInit {

  public destino:Destino;
  public data:Observable<any[]>;
  public destinos: Destino[] = [];
  public form:boolean;
  public destSelected:number;

  constructor(private config: NgbCarouselConfig, private db: AngularFireDatabase) { 
    config.interval = 5000;
    this.form = false;    
    this.data = this.db.list('destinos').valueChanges();    
  }

  ngOnInit() {
    this.data.subscribe((destinos) => {
      this.destinos = destinos
    })

    console.log(this.destinos)
  }

  showForm(id:number){
    this.form = true;
    this.destSelected = id-1;
  }

  }