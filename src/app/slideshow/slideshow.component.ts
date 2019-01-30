import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../services/firebase.service'
import { Observable } from 'rxjs';
import { ConditionalExpr } from '@angular/compiler';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-SlideShow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  providers: [
    NgbCarouselConfig
  ]
})
export class SlideShowComponent implements OnInit {

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown' };

  public titulo: string;
  public destino: string;
  public tituloTmp: String = "";
  public items: any[] = [];
  public data: Observable<any[]>;

  public destinos: boolean = false;

  public showSpinner: boolean = true;

  public header_img_array: any[] = [];
  public header_img: String;
  public mc: HammerManager;
  
  constructor(private config: NgbCarouselConfig, private firebase: FirebaseService, private route: ActivatedRoute, private titleService: Title) {
    
    config.interval = 100000;

    this.route.params.subscribe(params => { this.titulo = params.titulo });
    this.urls();
    this.callToDatabase();
    this.loadHeaderImg();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.titulo = params['titulo']
      this.callToDatabase()
      this.urls()
      this.setTitle("Trip and Trip | " + this.titulo.charAt(0).toUpperCase() + this.titulo.slice(1))
      this.loadHeaderImg()
    });

  }

  callToDatabase() {

    if(this.titulo == "caribe"){
      this.destino = "CARIBE"
    }
    else if(this.titulo == "norteAmerica"){
      this.destino = "AMÉRICA DEL NORTE"
    }
    if(this.titulo == "surAmerica"){
      this.destino = "AMÉRICA DEL SUR"
    }
    if(this.titulo == "centroAmerica"){
      this.destino = "AMÉRICA CENTRAL"
    }
    if(this.titulo == "europa"){
      this.destino = "EUROPA"
    }
    if(this.titulo == "restoMundo"){
      this.destino = "RESTO DEL MUNDO"
    }

    if(this.titulo == "love-trip"){
      this.titulo = "love trip"
    }

    this.items = [];
    if (this.destinos) {
      this.data = this.firebase.getItems('destinos/' + this.titulo);
    }
    else {
      this.data = this.firebase.getItems(this.titulo);
    }
    this.data.subscribe((data) => {
      this.items = data;
      this.showSpinner = false;
    })
  }

  urls() {

    if (this.titulo == "caribe" || this.titulo == "norteAmerica" || this.titulo == "centroAmerica" || this.titulo == "surAmerica" || this.titulo == "europa" || this.titulo == "restoMundo") {
      this.destinos = true
      console.log("hola")
    }

    else {
      this.destinos = false
    }
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    console.log(action);


    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
      let element = document.getElementsByClassName("carousel-control-prev");
      for (let i = 0; i < element.length; i++) {
        let el = element[i];
        var c = (element[i] as HTMLElement).click();
        console.log("up");
      }
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      let element = document.getElementsByClassName("carousel-control-next");
      for (let i = 0; i < element.length; i++) {
        let el = element[i];
        var c = (element[i] as HTMLElement).click();
        console.log("up");
      }
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.UP) {
     
    }

    if (action === this.SWIPE_ACTION.DOWN) {
      console.log("down");
    }
    // toggle avatar visibility
    //this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  loadHeaderImg() {
    this.header_img_array = [];
    this.data = this.firebase.getItems('headers_imagen');
    this.data.subscribe((data) => {
      this.header_img_array = data;
      switch (this.titulo) {
        case 'eventos':
          {
            this.header_img = this.header_img_array[1]
            break;
          }
        case 'gold-trip':
          {
            this.header_img = this.header_img_array[2]
            break;
          }
        case 'love trip':
          {
            this.header_img = this.header_img_array[3]
            break;
          }
        case 'news':
          {
            this.header_img = this.header_img_array[4]
            break;
          }
        case 'promociones':
          {
          this.header_img = this.header_img_array[5]
            break;
          }
        default:
        {
          console.log("entramos");
          this.header_img = this.header_img_array[0]
          break;
        }
      }
      console.log(this.header_img);
    })
  }
}
