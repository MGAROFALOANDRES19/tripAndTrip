import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slideshow/slideshow.component';


const routes: Route[] = [
  {path: '',            component: HomeComponent},
  {path: '/:type', component: SlideShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
