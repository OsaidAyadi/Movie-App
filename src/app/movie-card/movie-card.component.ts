import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieData;
  videoPlay = 'hide';
  imagePath = 'https://image.tmdb.org/t/p/original';

  constructor() { }

  ngOnInit() {
  }
  playVideo(str) {
    this.videoPlay = str;
  }

}
