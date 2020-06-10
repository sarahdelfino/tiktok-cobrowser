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
    return this.httpClient.get<Video>(baseUrl)
  };
}
