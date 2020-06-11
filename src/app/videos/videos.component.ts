import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
<<<<<<< HEAD
=======
import { Video } from '../video';
import { DomSanitizer } from '@angular/platform-browser';
>>>>>>> temp-laptop

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  
  video: any = [];

<<<<<<< HEAD
  constructor(private api: VideoService) { }

  getVideos() {

  }

  ngOnInit() {
    this.api.getVideo().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
=======
  video: Video;

  constructor(private api: VideoService,
    private sanitizer: DomSanitizer) { }

  getVideos() {
    this.api.getVideo()
    .subscribe({
      //next: video => console.log(video.html),
      next: video => this.video = video,
      error: err => console.log(err),
    });
    // this.sanitizer.bypassSecurityTrustHtml(this.video.html);
    this.sanitizer.bypassSecurityTrustScript(this.video.html);
  }

  ngOnInit() {
    this.getVideos();
>>>>>>> temp-laptop
  }
}
