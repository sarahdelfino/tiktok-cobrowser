import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './video';

const baseUrl = 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  constructor(private httpClient: HttpClient) {}

  getVideo() {
    return this.httpClient.get(baseUrl);
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
