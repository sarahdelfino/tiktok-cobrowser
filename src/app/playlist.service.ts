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
    private messageService: MessageService
  ) { }

  private playlistsUrl = 'api/playlists'; //URL to web api

  // GET playlists from the server
  getPlaylists(): Observable<Playlist[]> {
    this.messageService.add('PlaylistService: fetched playlists');
    return this.http.get<Playlist[]>(this.playlistsUrl)
    .pipe(
      catchError(this.handleError<Playlist[]>('getPlaylists', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');

      // let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
