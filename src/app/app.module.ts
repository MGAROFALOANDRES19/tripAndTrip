import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PromocionComponent } from './promocion/promocion.component';
import { DestinoComponent } from './destino/destino.component';
import { EventoComponent } from './evento/evento.component';
import { GoldtripComponent } from './goldtrip/goldtrip.component';
import { LovetripComponent } from './lovetrip/lovetrip.component';
import { NewsComponent } from './news/news.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PromocionComponent,
    DestinoComponent,
    EventoComponent,
    GoldtripComponent,
    LovetripComponent,
    NewsComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
