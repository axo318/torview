import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { TorrentApiResult } from "./torrent-api-result";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TorrentApiService {
  baseUrl = environment.torrentApiUrl;

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
