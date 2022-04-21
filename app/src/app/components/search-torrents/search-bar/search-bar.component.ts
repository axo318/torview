import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'torrent-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchWord: string = '';
  @Output() searchCriteria = new EventEmitter<String>();

  search() {
    this.searchCriteria.emit(this.searchWord);
  }

}
