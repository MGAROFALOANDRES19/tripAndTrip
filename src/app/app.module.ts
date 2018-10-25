import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
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
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideShowComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    UiModule,
    MenuModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), // for database
    ScrollToModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
