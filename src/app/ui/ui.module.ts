import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from '../menu/menu.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  exports: [LayoutComponent, FooterComponent, LoadingSpinnerComponent]
})
export class UiModule { }