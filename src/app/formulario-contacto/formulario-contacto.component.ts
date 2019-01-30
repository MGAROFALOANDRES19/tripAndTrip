import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

model : any = {};

  private itemSelected:String;
  private titulo:String;
  private data:Observable<any>;
  items:any[] = [];
  form:boolean;
  item:any;

  public destinos:boolean = false;

  constructor( private firebase:FirebaseService, private route: ActivatedRoute, private fb: FormBuilder ) { 
    this.route.params.subscribe( params => {this.titulo = params.titulo, this.itemSelected = params.id} );
    this.data = this.firebase.getItems(this.titulo);
    this.form = true;
    this.urls();
  }

  ngOnInit() {

    this.data.subscribe((items) => {
      this.items = items;
      for(let item of items){
        if(item.url == this.itemSelected){
          this.item = item;
        }
      }
    })
  }

   onSubmit() {
    this.form = false;

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
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
