import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentResultComponent } from './torrent-result.component';

describe('TorrentResultComponent', () => {
  let component: TorrentResultComponent;
  let fixture: ComponentFixture<TorrentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
