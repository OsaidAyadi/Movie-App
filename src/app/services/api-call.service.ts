import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

constructor(
  private httpClient: HttpClient,
  ) { }

  getService(url: string): Observable<object> {
    return this.httpClient.get(url);
  }

}
