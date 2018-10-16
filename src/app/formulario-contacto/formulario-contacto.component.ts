import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.phone }`;
    alert(allInfo); 
  }

}
