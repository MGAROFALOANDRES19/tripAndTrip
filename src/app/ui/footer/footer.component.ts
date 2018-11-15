import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private url:string;
  private gold:boolean = false;
  constructor(private route:ActivatedRoute) { 

    this.route.url.subscribe(url =>{
      this.url = url.toString()
  });

  }


  ngOnInit() {
    if (this.url == "gold-trip"){
      this.gold=true
    }


  }

}
