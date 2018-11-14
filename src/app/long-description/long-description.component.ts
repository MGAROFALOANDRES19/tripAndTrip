import { Component, OnInit } from '@angular/core';
import {Promocion} from '../slideshow/promocion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service'

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

  constructor(private firebase:FirebaseService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => {this.titulo = params.titulo, this.itemSelected = params.id} );
    this.data = this.firebase.getItems(this.titulo);

  }

  ngOnInit() {
    this.data.subscribe((promociones) => {
      this.promociones = promociones
    })
    this.itemSelected--;
  }

}
