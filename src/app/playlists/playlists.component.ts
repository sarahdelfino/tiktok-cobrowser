import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selectedPlaylist: Playlist;

  playlists: Playlist[];

  constructor(
    private playlistService: PlaylistService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getPlaylists();
  }

  onSelect(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
    this.messageService.add('PlaylistService: Selected playlist id=${playlist.id}');
  }

  getPlaylists(): void {
    this.playlistService.getPlaylists()
    .subscribe(playlists => this.playlists = playlists);
  }

  addPlaylist(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.playlistService.addPlaylist({ name } as Playlist)
    .subscribe(playlist => {
      this.playlists.push(playlist);
    })
  }

}
