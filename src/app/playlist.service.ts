import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private http: HttpClient,
  ) { }

  private playlistsUrl = 'api/playlists'; //URL to web api

  // GET playlists from the server
  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistsUrl)
    .pipe(
      catchError(this.handleError<Playlist[]>('getPlaylist', []))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  // add playlist to the server
  addPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(this.playlistsUrl, playlist,
      this.httpOptions).pipe(
        catchError(this.handleError<Playlist>('addPlaylist'))
      );
  }

  // Handle http operation that failed.
  // let the app continue
  // @param operation - name of operation that failed
  // @param result - optional value to return as the observable result

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log('${operation} failed: ${error.message}');

      // let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
