import { TestBed, inject } from '@angular/core/testing';

import { TripAndTripService } from './trip-and-trip.service';

describe('TripAndTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripAndTripService]
    });
  });

  it('should be created', inject([TripAndTripService], (service: TripAndTripService) => {
    expect(service).toBeTruthy();
  }));
});
