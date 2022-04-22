import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TorrentSearchResult } from './torrent-search-result';

@Injectable({
  providedIn: 'root'
})
export class TorrentSearchService {

  constructor(
    private httpClient: HttpClient
  ) {}

  searchTorrents(searchTerm: string): Observable<TorrentSearchResult[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q", searchTerm);
    queryParams = queryParams.append("cat", 200);

    return this.httpClient.get<TorrentSearchResult[]>('/torrent-api/', {
      params: queryParams,
    });
  }


}
