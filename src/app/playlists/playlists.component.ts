import { Component, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';
import { MessageService } from '../message.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selectedPlaylist: Playlist;

  playlists: Playlist[];

  submitted = false;

  constructor(
    private playlistService: PlaylistService,
    private messageService: MessageService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getPlaylists();
  }

  onSubmit() { this.submitted = true; }

  onSelect(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
    console.log(this.selectedPlaylist.name);
    this.messageService.add('PlaylistService: Selected playlist id=${playlist.id}');
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
      data: "Are you sure you want to delete " + this.selectedPlaylist.name,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log("hey", this.selectedPlaylist);
        this.delete(this.selectedPlaylist);
        
      }
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return ; }
    this.playlistService.addPlaylist({ name } as Playlist)
    .subscribe(playlist => {
      this.playlists.push(playlist);
    })
  }

  delete(playlist: Playlist): void {
    this.playlists = this.playlists.filter(p => p !== playlist);
    this.playlistService.deletePlaylist(this.selectedPlaylist.id).subscribe();
  }

}
