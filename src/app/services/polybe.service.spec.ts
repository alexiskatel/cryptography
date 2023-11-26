import { TestBed } from '@angular/core/testing';

import { PolybeService } from './polybe.service';

describe('PolybeService', () => {
  let service: PolybeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolybeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
