import { Component, OnInit, HostBinding } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('down', style({ transform: 'translateY(0%)', display:'none' })),
      state('up', style({ transform: 'translateY(-100%)', display:'block' })),
      transition('* => *', animate(300))
    ])],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {

  public status: string = "down";
  public showed: boolean = false;

  constructor( config: NgbModalConfig, private modalService: NgbModal ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {

  }

  showMenu() {
    this.showed = this.showed == true ? false : true;
    this.status = this.status === 'down' ? 'up' : 'down';
  }

  open(content) {
    this.modalService.open(content);
  }
  

}
