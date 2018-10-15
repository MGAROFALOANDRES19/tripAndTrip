import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { PromocionComponent } from './promocion/promocion.component';
import { DestinoComponent } from './destino/destino.component';
import { EventoComponent } from './evento/evento.component';
import { GoldtripComponent } from './goldtrip/goldtrip.component';
import { LovetripComponent } from './lovetrip/lovetrip.component';

const routes: Route[] = [
  {path: '',            component: HomeComponent},
  {path: 'promociones', component: PromocionComponent},
  {path: 'destinos',    component: DestinoComponent},
  {path: 'eventos',     component: EventoComponent},
  {path: 'gold-trip',   component: GoldtripComponent},
  {path: 'love-Trip',   component: LovetripComponent},
  {path: 'news',        component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
