import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  getPlaylists(): void {
    this.playlists = this.playlistService.getPlaylists();
  }

  ngOnInit() {
    this.getPlaylists();
  }

}
