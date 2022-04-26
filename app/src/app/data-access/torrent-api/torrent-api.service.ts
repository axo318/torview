import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { TorrentApiResult } from "./torrent-api-result";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TorrentApiService {
  baseUrl = '/torrent-api/';

  constructor(
    private httpClient: HttpClient,
  ) {}

  searchTorrentsWithKeyword(keyword: string): Observable<TorrentApiResult[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("q", keyword);
    queryParams = queryParams.append("cat", 200);

    return this.httpClient.get<TorrentApiResult[]>(this.baseUrl, {
      params: queryParams,
    });
  }

}
