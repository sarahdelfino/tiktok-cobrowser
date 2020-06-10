import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  
  video: any = [];

  constructor(private api: VideoService) { }

  getVideos() {

  }

  ngOnInit() {
    this.api.getVideo().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
