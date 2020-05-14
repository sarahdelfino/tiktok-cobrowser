import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { PLAYLISTS } from './mock-playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  getPlaylists(): Playlist[] {
    return PLAYLISTS;
  }
}
