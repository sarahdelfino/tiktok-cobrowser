import { Component } from '@angular/core';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent {

model = new Playlist('test playlist', 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173');

submitted = false;

onSubmit() { this.submitted = true; }

newPlaylist() {
  this.model = new Playlist('', '');
}


  // constructor() { }

  // ngOnInit() {
  // }

}
