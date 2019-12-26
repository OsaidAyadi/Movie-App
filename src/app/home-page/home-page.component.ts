import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  popMovies;

  constructor(
    private movie: MovieApiService,
  ) {}

  ngOnInit() {
      this.movie.getPopular(1).subscribe((data) => {
        this.popMovies = data;
      });
  }


}
