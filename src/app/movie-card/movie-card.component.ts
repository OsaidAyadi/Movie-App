import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieData;
  videoPlay = 'hide';
  imagePath = 'https://image.tmdb.org/t/p/original';
  movieKey = '';
  youtubeLink = 'https://www.youtube.com/embed/g4U4BQW9OEk';
  isPlay = false;
  showLoader = false;
  constructor(
    private movie: MovieApiService,
    ) { }

  ngOnInit() {
  }

  playVideo(str) {
    this.videoPlay = str;
  }

  playMovie(id: number): void {
    this.isPlay = true;
    this.showLoader = true;
    this.movie.getMovie(id).subscribe((data) => {
      this.movieKey = data.results[0].key;
      this.youtubeLink = `https://www.youtube.com/embed/${this.movieKey}`;
      this.showLoader = false;
    });
  }

  closeVideo(): void {
    this.isPlay = false;
  }

}
