import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  public data: Observable<any[]>
  public items: any[] = [];
  public itemsFilter:any = {};

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private modalService: NgbModal) {
    this.callToDatabase();
   }

  ngOnInit() {
  }

  callToDatabase(){
    this.items = [];
    this.data = this.firebase.getItems('keywords');
    this.data.subscribe((data) => {
      this.items = data;
    })
    console.log(this.data)
  }

  addToSearch(url:String){
   this.router.navigate(['/busqueda/'+url])
  }


  open(content) {
    this.modalService.open(content);
  }
  


}
