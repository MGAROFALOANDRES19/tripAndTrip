import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slideshow/slideshow.component';
import { LongDescriptionComponent } from './long-description/long-description.component';
import { LongDescGoldComponent } from './long-desc-gold/long-desc-gold.component';
import { PageResultComponent } from './page-result/page-result.component';
import { GoldtripComponent } from './goldtrip/goldtrip.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component'

const routes: Route[] = [
  {path: '',                    component: HomeComponent},
  {path: 'gold-trip',           component: GoldtripComponent},
  {path: 'gold-trip/:id',        component: LongDescGoldComponent},
  {path: 'busqueda/:keyword',   component: PageResultComponent},
  {path: ':titulo',             component: SlideShowComponent},
  {path: ':titulo/:id',         component: LongDescriptionComponent},
  {path: ':titulo/:id/contacto',component: FormularioContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
