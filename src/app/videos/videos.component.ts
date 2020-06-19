import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  // video: Video;

  video: any = [];


  constructor(private videoService: VideoService) {
    this.videoService.getVideo()
    .subscribe((resp: Video[]) => {
      console.log(resp);
    });
   }

  /*
  getVideos() {
    this.videoService.getVideo()
    .subscribe({
      //next: video => console.log(video.html),
      next: video => this.video = video,
      error: err => console.log(err),
    });
    // this.sanitizer.bypassSecurityTrustScript(this.video.html);
  }
*/
  ngOnInit() {

  }

}
