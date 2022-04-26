import { Component, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'torrent-result',
  templateUrl: './torrent-result.component.html',
  styleUrls: ['./torrent-result.component.scss']
})
export class TorrentResultComponent {
  @Input() result: any;

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
