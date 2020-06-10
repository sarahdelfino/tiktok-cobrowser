import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  video: Video;

  constructor(private api: VideoService) { }

  getVideos() {
    this.api.getVideo()
    .subscribe({
      next: video => this.video = video,
      error: err => console.log(err),
    });
  }

  ngOnInit() {
    this.getVideos();
  }
}
