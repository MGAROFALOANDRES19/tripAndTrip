import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent implements OnInit {

  public href:String = ""

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

}
