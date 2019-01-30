import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
import { Title }  from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { element } from 'protractor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('down', style({ transform: 'translateY(0%)', display: 'none' })),
      state('up', style({ transform: 'translateY(-100%)', display: 'block' })),
      transition('* => *', animate(300))
    ])],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {

  public status: string = "down";
  public showed: boolean = false;

  elements =  {logo : [], despegar : [], background_home : []}

  public data: Observable<any[]>;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private firebase: FirebaseService, private titleService: Title) {

    this.callToDatabase('logo');
    this.callToDatabase('despegar');
    this.callToDatabase('background_home');

  }

  ngOnInit() {
    this.setTitle("Trip & Trip | Inicio");
  }


  showMenu() {
    this.showed = this.showed == true ? false : true;
    this.status = this.status === 'down' ? 'up' : 'down';
  }

  callToDatabase(param) {
    this.data = this.firebase.getItems(param);
    this.data.subscribe((data) => {
      this.elements[param] = data;
      console.log(this.elements.background_home.length)
    })
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
