import { TestBed } from '@angular/core/testing';

import { TorrentSearchService } from './torrent-search.service';

describe('TorrentSearchService', () => {
  let service: TorrentSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
