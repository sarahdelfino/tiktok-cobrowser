import { Component, Injectable, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
@Injectable()
export class VideosComponent{

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) { }

  // ngAfterViewInit() {
  //   var s = this.document.createElement('blockquote');
  //   s.className="tiktok-embed"
  //   s.cite="https://www.tiktok.com/@mojothemonkey/video/6822698712737844485"
  //   s.style.width = '100%';
  //   s.style.height = 'auto';
  //   this.elementRef.nativeElement.appendChild(s);
  // }

  

}
