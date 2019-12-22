import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { MovieApiService } from './services/movie-api.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      MovieCardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      MovieApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
