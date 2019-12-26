import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { ApiCallService } from './api-call.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private API_KEY = 'fc75db436bd7b6e96b68010cc3503e42';

constructor(
  private httpClient: HttpClient,
  private api: ApiCallService
  ) { }

  getPopular(num) {
    return this.api.getService(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=${num}`);
  }
  getType(id) {
    return this.api.getService(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`);
  }
  getMovie(id) {
    return this.api.getService(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}`);
  }

  getResult(key: string) {
    return this.api.getService
    (`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${key}&page=1&include_adult=false`);
  }

}
