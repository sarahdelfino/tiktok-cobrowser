import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';
import { MessageService } from '../message.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})

export class PlaylistsComponent implements OnInit {

  // playlists$: Observable<any> = this.http.get('/api/playlists');

  // selectedPlaylist: Playlist;

  // playlists: Playlist[];

  playlists: any = [];

  // submitted = false;

  constructor(
    public dialog: MatDialog,

    private playlistService: PlaylistService,
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  // onSubmit() { this.submitted = true; }


  getPlaylists() {
    this.playlistService.getPlaylistTest()
    .subscribe({
      next: playlists => this.playlists = playlists,
      // next: playlists => console.log(playlists[1].video),
      error: err => console.log(err),
    });
  }

  ngOnInit() {
    this.getPlaylists();
  }

  /*onSelect(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
    console.log(this.selectedPlaylist.name);
    this.messageService.add('PlaylistService: Selected playlist id=${playlist.id}');
    this.playlistService.getPlaylists()
      .subscribe(playlists => this.playlists = playlists);
  }

  getPlaylists(): void {
    this.playlistService.getPlaylists()
      .subscribe(playlists => this.playlists = playlists);
  }



  openDelete(): void {
    const dialogRef =
      this.dialog.open(ConfirmationDialogComponent, {
        width: '350px',
        // TODO: pass playlist object to display
        // name and finish delete confirmation
        data: "Are you sure you want to delete " +
          this.selectedPlaylist.name
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked', this.selectedPlaylist.id);
        // this.playlistService.deletePlaylist(this.selectedPlaylist.id);
        this.delete(this.selectedPlaylist);
      }
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playlistService.addPlaylist({ name } as Playlist)
      .subscribe(playlist => {
        this.playlists.push(playlist);
      })
  }

  delete(playlist: Playlist): void {
    console.log("deleting from playlists component");
    this.playlists = this.playlists.filter(p => p !== playlist);
    this.playlistService.deletePlaylist(playlist.id).subscribe();
  }
*/
}
