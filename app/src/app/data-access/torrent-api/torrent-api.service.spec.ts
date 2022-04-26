import { TestBed } from '@angular/core/testing';

import { TorrentApiService } from './torrent-api.service';

describe('TorrentApiService', () => {
  let service: TorrentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
