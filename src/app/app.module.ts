import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './components/card/card.component';
import { LastEpisodeComponent } from './components/last-episode/last-episode.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    LastEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
