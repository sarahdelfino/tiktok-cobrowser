import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Playlist } from './playlist';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistsUrl = 'api/playlists'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    /** GET playlists..by id wasnt working */
getPlaylists(): Observable<Playlist[]> {
  return this.http.get<Playlist[]>(this.playlistsUrl)
  .pipe(
    tap(_ => this.log('fetched playlists')),
    catchError(this.handleError<Playlist[]>('getPlaylists', []))
  );
}

// GET playlist by id Return 'undefined' when not found
getPlaylistNo404<Data>(id: number): Observable<Playlist> {
  const url = '${this.playlistsUrl}/?id=${id}';
  return this.http.get<Playlist[]>(url)
  .pipe(
    map(playlists => playlists[0]),
    tap(p => {
      const outcome = p ? 'fetched' : 'did not find';
      this.log('${outcome} playlist id=${id}');
    }),
    catchError(this.handleError<Playlist>('getPlaylist id=${id}'))
  );
}

// GET playlist by id. will 404 if not found
getPlaylist(id: number): Observable<Playlist> {
  const url = '${this.playlistsUrl}/${id}';
  return this.http.get<Playlist>(url).pipe(
    tap(_ => this.log('fetched playlist id=${id}')),
    catchError(this.handleError<Playlist>('getPlaylist id=${id}'))
  );
}

  // add new playlist to the server
  addPlaylist(playlist: Playlist): Observable<Playlist> {
    console.log("PlaylistService: " + playlist.name);
    return this.http.post<Playlist>(this.playlistsUrl, playlist,
      this.httpOptions).pipe(
        tap((newPlaylist: Playlist) => this.log('added playlist with id=${newPlaylist.id}')),
        catchError(this.handleError<Playlist>('addPlaylist'))
      );
  }

  // PUT: update playlist on the server
  updatePlaylist(playlist: Playlist): Observable<any> {
    return this.http.put(this.playlistsUrl, playlist,
      this.httpOptions).pipe(
        tap(_ => this.log('updated playlist id=${playlist.id}')),
        catchError(this.handleError<any>('updatePlaylist'))
      );
  }

  deletePlaylist(playlist: Playlist | number): Observable<Playlist> {
    const id = typeof playlist === 'number' ? playlist : playlist.id;
    const url = '${this.playlistsUrl}/${id}';

    return this.http.delete<Playlist>(url,
      this.httpOptions).pipe(
      tap(_ => this.log('deleted playlist id=${id}')),
      catchError(this.handleError<Playlist>('deletePlaylist'))
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
      this.log('${operation} failed: ${error.message}');

      // let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Log a PlaylistService message with the MessageService
  private log(message: string) {
    this.messageService.add('PlaylistService: ${message}');
  }

}
