import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  callMovie = '';
  title = 'Movie';

  getMovie(e) {
    this.callMovie = e;
  }

  playMovie(id) {
    console.log('Hey, this is an ID' , id);
  }
}
