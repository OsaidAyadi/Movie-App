import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieApiService } from '../services/movie-api.service';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  params: string;
  result: any;
  constructor(
    private route: ActivatedRoute,
    private movie: MovieApiService
    ) {
      this.subscribeRouteChange();
  }

  subscribeRouteChange() {
    this.route.queryParams.subscribe(params => {
      this.params = params['query'];
      this.movie.getResult(this.params).subscribe((data) => {
        this.result = data;
        // console.log(this.result.results[10].poster_path);
      });
  });
}

}
