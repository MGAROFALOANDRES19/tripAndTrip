import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public data: Observable<any[]>;
  public items: any[] = []; 

  private url:string;
  gold:boolean = false;
  constructor(private route:ActivatedRoute, private firebase:FirebaseService) { 

    this.route.url.subscribe(url =>{
      this.url = url.toString()

      this.callToDatabase('contacto')
  });

  }


  callToDatabase(param) {
    this.data = this.firebase.getItems(param);
    this.data.subscribe((data) => {
      this.items = data;
    })
  }

  ngOnInit() {
    if (this.url == "gold-trip"){
      this.gold=true
    }


  }

}
