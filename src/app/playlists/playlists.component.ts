import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

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
  

  add(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.playlistService.addPlaylist({ name } as Playlist)
    .subscribe(playlist => {
      this.playlists.push(playlist);
    })
  }

  delete(playlist: Playlist): void {
    this.playlists = this.playlists.filter(p => p !== playlist);
    this.playlistService.deletePlaylist(playlist).subscribe();
  }

}
