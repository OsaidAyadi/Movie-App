import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  popMovies;

  constructor(
    private movie: MovieApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.movie.getPopular(1).subscribe((data) => {
      this.popMovies = data;
    });
  }
}
