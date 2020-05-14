import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Playlist } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const playlists = [
      { id: 11, name: 'playlist 1', url: 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173'},
      { id: 12, name: 'playlist 2', url: 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@oakleythegoldenpuppy/video/6816357733827218693'},
      { id: 13, name: 'hello' },
      { id: 14, name: 'yep' },
      { id: 15, name: 'alright' },
    ];
    return {playlists};
  }

  genId(playlists: Playlist[]): number {
    return playlists.length > 0 ? Math.max(...playlists.map(playlist =>
      playlist.id)) + 1 : 11;
  }

  constructor() { }
}
