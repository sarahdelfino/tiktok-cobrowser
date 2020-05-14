import { Component } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent {

  urls = ['https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173'
  ,'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@oakleythegoldenpuppy/video/6816357733827218693'
  ,
];

model = new Video(1, this.urls[0]);

submitted = false;

onSubmit() { this.submitted = true; }

get diagnostic() { return JSON.stringify(this.model); }

  // constructor() { }

  // ngOnInit() {
  // }

}
