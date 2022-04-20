import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-torrents',
  templateUrl: './search-torrents.component.html',
  styleUrls: ['./search-torrents.component.scss']
})
export class SearchTorrentsComponent implements OnInit {
  currentSearchTerm: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchTorrents(searchQuery: String) {
    this.currentSearchTerm = searchQuery;
    // alert(searchQuery);
  }
}
