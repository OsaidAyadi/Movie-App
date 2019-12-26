import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Giturl = 'https://github.com/OsaidAyadi';
  constructor() { }

  ngOnInit() {
  }

  openGit() {
   window.open(this.Giturl, '_blank');
  }

}
