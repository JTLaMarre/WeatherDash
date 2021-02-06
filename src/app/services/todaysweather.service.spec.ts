import { TestBed } from '@angular/core/testing';

import { TodaysweatherService } from './todaysweather.service';

describe('TodaysweatherService', () => {
  let service: TodaysweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
