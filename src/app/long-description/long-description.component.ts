import { Component, OnInit } from '@angular/core';
import {Promocion} from '../slideshow/promocion';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-long-description',
  templateUrl: './long-description.component.html',
  styleUrls: ['./long-description.component.css']
})
export class LongDescriptionComponent implements OnInit { 

  public data:Observable<any[]>;
  public promociones:Promocion[] = [];
  public titulo:string;
  public itemSelected:number;
  public promocion:Promocion;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {this.titulo = params.titulo, this.itemSelected = params.id} );
    this.data = this.db.list(this.titulo).valueChanges();   

  }

  ngOnInit() {
    this.data.subscribe((promociones) => {
      this.promociones = promociones
    })
    this.itemSelected--;
  }

}