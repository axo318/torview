import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-torrents',
  templateUrl: './search-torrents.component.html',
  styleUrls: ['./search-torrents.component.scss']
})
export class SearchTorrentsComponent implements OnInit {
  currentSearchTerm: String = '';

  exampleResults = [
    {name: "bobbyyysdy.sdsfsdfsdfsdf.1080p.bluraybobbyyysdy.sdsfsdfsdfsdf.108=ayfsdf.1080p.bluray", year: 2022},
    {name: "rob", year: 2012},
    {name: "chum", year: 2011},
    {name: "corgi", year: 1999},
    {name: "rob", year: 2012},
    {name: "chum", year: 2011},
    {name: "corgi", year: 1999},
    {name: "rob", year: 2012},
    {name: "chum", year: 2011},
    {name: "corgi", year: 1999},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  searchTorrents(searchQuery: String) {
    this.currentSearchTerm = searchQuery;
    this.exampleResults = this.exampleResults.map(res => {
      return {...res, name: `${searchQuery}--${res.name}`}
    });
  }


}
