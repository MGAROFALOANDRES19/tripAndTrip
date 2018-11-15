import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  city: string;
  private itemSelected:number;
  private titulo:String;
  private data:Observable<any>;
  private items:any[] = [];
  private form:boolean;

  public destinos:boolean = false;

  constructor( private firebase:FirebaseService, private route: ActivatedRoute ) { 
    this.route.params.subscribe( params => {this.titulo = params.titulo, this.itemSelected = params.id} );
    this.data = this.firebase.getItems(this.titulo);
    this.form = true;
    this.urls()
  }

  ngOnInit() {
    this.data.subscribe((items) => {
      this.items = items
    })
    this.itemSelected--;
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.phone }`;
    alert(allInfo); 
  }

  submit(){
    this.form = false;
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
