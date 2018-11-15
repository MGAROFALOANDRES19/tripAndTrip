import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-long-desc-gold',
  templateUrl: './long-desc-gold.component.html',
  styleUrls: ['./long-desc-gold.component.css']
})
export class LongDescGoldComponent implements OnInit {

  private items:any[] = []
  private data:Observable<any[]>;
  private id:number;

  constructor(private firebase:FirebaseService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => { this.id = params.id });
    this.id--
    this.callToDatabase()
  }

  ngOnInit() {
    console.log(this.items)
  }


  callToDatabase(){
    this.items = [];
    this.data = this.firebase.getItems("gold trip");
    this.data.subscribe((data) => {
      this.items = data
      
    })
  }

}
