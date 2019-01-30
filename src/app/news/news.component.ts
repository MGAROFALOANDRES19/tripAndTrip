import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

}
