import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AppStoreComponent } from './app-store/app-store.component';
import { RrssComponent } from './rrss/rrss.component';



@NgModule({
  declarations: [
    FooterComponent,
    AppStoreComponent,
    RrssComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
