import { Component, OnInit } from '@angular/core';
import { PLAYLISTS } from '../mock-playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = PLAYLISTS;

  constructor() { }

  ngOnInit() {
  }

}
