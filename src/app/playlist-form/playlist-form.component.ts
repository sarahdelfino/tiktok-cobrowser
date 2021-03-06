import { Component, OnInit } from '@angular/core';

import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent implements OnInit {

  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists(): void {
    this.playlistService.getPlaylists()
    .subscribe(playlists => this.playlists = playlists);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playlistService.addPlaylist({ name } as Playlist)
      .subscribe(playlist => {
        this.playlists.push(playlist);
        console.log("PFORM - Added playlist: " + { Playlist });
        console.log("PFORM - Added name: " + { name });
      });
    }

  submitted = false;
 
  onSubmit() { this.submitted = true; }

}
