import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-long-desc-gold',
  templateUrl: './long-desc-gold.component.html',
  styleUrls: ['./long-desc-gold.component.css']
})
export class LongDescGoldComponent implements OnInit {

  items:any[] = []
  private data:Observable<any[]>;
  private id:number;

  public showSpinner: boolean = true;

  constructor(private firebase:FirebaseService, private route:ActivatedRoute, private titleService:Title,
    config: NgbModalConfig,
    private modalService: NgbModal) { 
    this.route.params.subscribe(params => { this.id = params.id });
    this.id--
    this.callToDatabase()
  }

  ngOnInit() {
    console.log(this.items)
    this.setTitle("Trip and Trip | " + this.id)
  }


  callToDatabase(){
    this.items = [];
    this.data = this.firebase.getItems("gold trip");
    this.data.subscribe((data) => {
      this.items = data;
      this.showSpinner = false;
      
    })
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  open(content) {
    this.modalService.open(content);
  }
  

}
