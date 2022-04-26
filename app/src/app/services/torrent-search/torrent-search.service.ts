import { Injectable } from '@angular/core';

import { map, Observable, take } from 'rxjs';
import { TorrentApiService } from "../../data-access/torrent-api/torrent-api.service";
import { TorrentApiResult } from "../../data-access/torrent-api/torrent-api-result";
import { TorrentResult } from "./torrent-result";

@Injectable({
  providedIn: 'root'
})
export class TorrentSearchService {

  constructor(
    private torrentApiService: TorrentApiService,
  ) {}

  searchTorrents(searchTerm: string): Observable<TorrentResult[]> {
    return this.torrentApiService.searchTorrentsWithKeyword(searchTerm)
      .pipe(
        take(1),
        map(apiResults => apiResults.map(this.toTorrentResult))
      )
  }

  private toTorrentResult(torrentApiResult: TorrentApiResult): TorrentResult {
    return {
      id: torrentApiResult.id,
      name: torrentApiResult.name,
      torrentUrl: TorrentSearchService.formatLink(torrentApiResult.info_hash),
      seeders: torrentApiResult.seeders,
      leechers: torrentApiResult.leechers,
      size: TorrentSearchService.formatSize(torrentApiResult.size),
      numFiles: torrentApiResult.num_files,
    } as TorrentResult;
  }

  private static formatSize(stringSizeInB: string): string {
    let sizeInGb = (parseInt(stringSizeInB) / (1073741824)).toString();    // Turn to GiB
    let sizeInGbFormatted = +parseFloat(sizeInGb).toFixed(2);
    return `${sizeInGbFormatted} GiB`;
  }

  private static formatLink(infoHash: string): string {
    return `magnet:?xt=urn:btih:${infoHash}`;
  }

}
