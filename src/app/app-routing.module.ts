import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slideshow/slideshow.component';
import { LongDescriptionComponent } from './long-description/long-description.component';


const routes: Route[] = [
  {path: '',        component: HomeComponent},
  {path: ':titulo',  component: SlideShowComponent},
  {path: ':titulo/:id',  component: LongDescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
