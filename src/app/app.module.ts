import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import 'mousetrap';
import {GalleryModule} from '@ks89/angular-modal-gallery';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slideshow/slideshow.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { UiModule } from './ui/ui.module';
import { MenuModule } from './menu/menu.module'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { LongDescriptionComponent } from './long-description/long-description.component';
import { GoldtripComponent } from './goldtrip/goldtrip.component';
import { PageResultComponent } from './page-result/page-result.component';
import { FirebaseService } from './services/firebase.service';
import { NewsComponent } from './news/news.component';
import { LongDescGoldComponent } from './long-desc-gold/long-desc-gold.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { MenuDestinosComponent } from './menu-destinos/menu-destinos.component';
import { Title }  from '@angular/platform-browser';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideShowComponent,
    FormularioContactoComponent,
    LongDescriptionComponent,
    GoldtripComponent,
    PageResultComponent,
    NewsComponent,
    LongDescGoldComponent,
    SearcherComponent,
    MenuDestinosComponent,
  ],
  imports: [
    GalleryModule.forRoot(),
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    UiModule,
    MenuModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), // for database
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    FilterPipeModule,
    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareButtonsModule, //revisar
    ReactiveFormsModule
  ],
  providers: [FirebaseService, Title,
   { provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig 
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
