import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-youtube-frame',
  templateUrl: './youtube-frame.component.html',
  styleUrls: ['./youtube-frame.component.css']
})
export class YoutubeFrameComponent implements OnInit {
@Input() youtubeLink;
@Input() isPlay;
@Output() Close = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  closeVideo() {
    this.Close.emit();
  }

}
