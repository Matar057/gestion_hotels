import { TestBed } from '@angular/core/testing';

import { ListHotelService } from './list-hotel.service';

describe('ListHotelService', () => {
  let service: ListHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
