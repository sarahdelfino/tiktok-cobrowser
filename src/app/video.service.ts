import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Video {
  version: string,
  type: string,
  title: string,
  author_url:  string,
  author_name:  string,
  width:  string,
  height:  string,
  html:  string,
  thumbnail_width: string,
  thumbnail_height: string,
  thumbnail_url:  string,
  provider_url: string,
  provider_name: string,
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private httpWithoutInterceptor: HttpClient;
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
  

  get videos() {
    return this._videos.asObservable();
  }



  // private formatErrors(error: any) {
  //   return throwError(error.error);
  // }

  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http.get(`${path}`, { params })
  //   .pipe(catchError(this.formatErrors));
  // }

  // _get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.httpWithoutInterceptor.get(`${path}`, { params })
  //     .pipe(catchError(this.formatErrors));
  // }


}
