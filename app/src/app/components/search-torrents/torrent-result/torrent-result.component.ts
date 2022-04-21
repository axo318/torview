import { Component, Input } from '@angular/core';

@Component({
  selector: 'torrent-result',
  templateUrl: './torrent-result.component.html',
  styleUrls: ['./torrent-result.component.scss']
})
export class TorrentResultComponent {

  @Input() result: any;

}
