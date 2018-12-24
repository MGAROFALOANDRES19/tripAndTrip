import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from '../menu/menu.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import { ShareButtonsModule } from '../../../node_modules/@ngx-share/buttons';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    FilterPipeModule, HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
    ShareButtonsModule //revisar],
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoadingSpinnerComponent, ShareButtonsComponent  ],
  exports: [LayoutComponent, FooterComponent, LoadingSpinnerComponent, ShareButtonsComponent]
})
export class UiModule { }