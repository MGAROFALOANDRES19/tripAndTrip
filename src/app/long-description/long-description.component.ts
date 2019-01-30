import { Component, OnInit } from '@angular/core';
import {Promocion} from '../slideshow/promocion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title }  from '@angular/platform-browser';
import {
  AccessibilityConfig,
  Action,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  Image,
  ImageModalEvent,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  PreviewConfig,
  LoadingConfig,
  LoadingType,
  CurrentImageConfig
} from '@ks89/angular-modal-gallery';


@Component({
  selector: 'app-long-description',
  templateUrl: './long-description.component.html',
  styleUrls: ['./long-description.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LongDescriptionComponent implements OnInit { 

  public data:Observable<any[]>;
  public promociones:any[] = [];
  public titulo:string;
  public itemSelected:String;
  public item:any;
  public promocion:Promocion;
  public lugar:String;
  public destinos:boolean = false;

  imageIndex = 1;
  galleryId = 1;

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
        description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
        description: 'Description 4',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
      }
    )
  ];

  // array of images (obviously with different id) where paths are the same.
  // to prevent caching issues I have to append '?index'.
  sameImages: Image[] = [
    new Image(0, {
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?1',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?2',
      extUrl: 'http://www.google.com'
    }),
    new Image(2, {
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg?3',
      extUrl: 'http://www.google.com'
    }),
  ];


  constructor(
    private firebase:FirebaseService,
    private route: ActivatedRoute,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private titleService: Title) { 
    this.route.params.subscribe( params => {this.titulo = params.titulo, this.itemSelected = params.id, this.lugar = params.lugar} );
    if (this.titulo != "gold-trip"){
    this.data = this.firebase.getItems(this.titulo);
  }
  if(this.titulo == "destinos"){
    this.data = this.firebase.getItems(this.titulo+"/"+this.lugar);
    console.log("HOLAAA"+this.lugar);
    this.destinos = true;
  }
  if (this.titulo == "gold-trip"){
    this.data = this.firebase.getItems("gold trip");
  }

  }

  ngOnInit() {
    
    this.data.subscribe((promociones) => {
      this.promociones = promociones
      for (let item of promociones) {
        if(this.itemSelected == item.url){
          this.item = item;
          if(this.titulo != "gold-trip" && this.titulo != "destinos"){
            this.setTitle("Trip and Trip | " + this.titulo.charAt(0).toUpperCase() + this.titulo.slice(1))
          }

          else if(this.titulo == "destinos"){
            this.setTitle("Trip and Trip | " + this.item.titulo.charAt(0).toUpperCase() + this.item.titulo.slice(1))
            console.log(this.item)
          }

        }
    }
    
    })
  }


  open(content) {
    this.modalService.open(content);
  }
  
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
