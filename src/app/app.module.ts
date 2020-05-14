import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    PlaylistFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
