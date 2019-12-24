import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs';
import { MovieApiService } from '../services/movie-api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  imagePath = 'https://image.tmdb.org/t/p/original';
  movieDetails;
  movieKey: string;
  youtubeLink: string;
  year: string;
  isPlay = false;
  showLoader = false;


  @Output() Play = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private movie: MovieApiService,
    ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.movie.getMovie(this.id).subscribe((data) => {
      this.movieKey = data.results;
      this.youtubeLink = `https://www.youtube.com/embed/${this.movieKey[0].key}`;
      this.showLoader = false;
    });

    this.movie.getType(this.id).subscribe((data) => {
      this.movieDetails = data;
      this.year = this.movieDetails.release_date;
      this.year = this.year.slice(0 , 4);
    });
  }


  playMovie(): void {
    this.isPlay = true;
    this.showLoader = true;
  }

  closeVideo(): void {
    this.isPlay = false;
  }


}
