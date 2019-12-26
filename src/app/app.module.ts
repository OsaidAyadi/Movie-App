import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieApiService } from './services/movie-api.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SafePipe } from './util/safe.pipe';
import { YoutubeFrameComponent } from './youtube-frame/youtube-frame.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
   { path: '' , component: HomePageComponent},
   { path: 'movie/:id', component: MovieDetailsComponent },
   { path: 'search', component: ResultComponent },
   { path: '**' , component: NotFoundComponent }

 ];

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      MovieCardComponent,
      MovieDetailsComponent,
      SafePipe,
      YoutubeFrameComponent,
      SearchBarComponent,
      ResultComponent,
      NotFoundComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes,
         {scrollPositionRestoration: 'enabled'}
      ),
      FormsModule
   ],
   providers: [
      MovieApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
