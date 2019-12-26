import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  keyWord: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSearch() {
    if (this.keyWord === '' || this.keyWord === null || this.keyWord === undefined) {
      alert ('Make sure to write a movie name in the search box !');
    } else {
    this.router.navigate(['/search'], { queryParams: { query: this.keyWord } });
    this.keyWord = '';
      }
  }

}
