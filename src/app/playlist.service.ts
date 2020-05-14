import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private http: HttpClient
  ) { }

  private playlistsUrl = 'api/playlists'; //URL to web api

  // GET playlists from the server
  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistsUrl)
  }
}
