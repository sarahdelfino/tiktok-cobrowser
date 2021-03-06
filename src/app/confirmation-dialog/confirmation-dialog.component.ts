import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {



  playlists: Playlist[];

  constructor(
    public dialogRef:
    MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any,

    private playlistService: PlaylistService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // delete(playlist: Playlist): void {
  //   this.playlists = this.playlists.filter(p => p !== playlist);
  //   this.playlistService.deletePlaylist(playlist.id).subscribe();
  // }



}
