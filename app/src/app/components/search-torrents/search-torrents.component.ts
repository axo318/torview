import { Component, OnInit } from '@angular/core';
import { TorrentSearchService } from "../../services/torrent-search/torrent-search.service";
import { TorrentResult } from "../../services/torrent-search/torrent-result";

@Component({
  selector: 'app-search-torrents',
  templateUrl: './search-torrents.component.html',
  styleUrls: ['./search-torrents.component.scss']
})
export class SearchTorrentsComponent implements OnInit {
  currentSearchTerm: String = '';
  torrentSearchResults: TorrentResult[] = [];

  constructor(
    private torrentSearchService: TorrentSearchService
  ) {}

  ngOnInit(): void {
  }

  searchTorrents(searchQuery: String) {
    this.currentSearchTerm = searchQuery;
    this.torrentSearchService.searchTorrents(searchQuery.toString()).subscribe(results => {
      this.torrentSearchResults = results;
    })
  }


}
