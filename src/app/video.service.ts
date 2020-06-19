import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './video';
import { PlaylistService } from './playlist.service';
import { Playlist } from './playlist';
import { Observable } from 'rxjs';

const baseUrl = 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173';

// const baseUrl = 'https://www.tiktok.com/oembed?url=';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private http: HttpClient,) {}

    // playlistUrl = this.playlist.url;

    // url = baseUrl + this.playlistUrl;

  getVideo(): Observable<Video[]> {
    return this.http.get<Video[]>(baseUrl)
    .pipe(map((video: Video[]) => video.map(video => new Video(video))));
  }
  
  
}  
  
  /*private httpWithoutInterceptor: HttpClient;
  private _videos = new BehaviorSubject<Video[]>([]);
  private baseUrl = 'https://tiktok.com/oembed?url=';
  private dataStore: { videos: Video[] } = { videos: [] };
  // readonly videos = this._videos.asObservable();

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend,
  ) { 
    this.httpWithoutInterceptor = new HttpClient(httpBackend);
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/https://www.tiktok.com/@scout2015/video/6718335390845095173`)
    .subscribe(
      data => {
        // this.dataStore.videos = data;
        this._videos.next(Object.assign({}, this.dataStore).videos);
      },
      error => console.log("Could not load videos")
    );
  }
  
  constructor(private httpClient: HttpClient) {}

  getVideo() {
    return this.httpClient.get<Video>(baseUrl)
  };
}*/
