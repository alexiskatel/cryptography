import { TestBed } from '@angular/core/testing';

import { AffineService } from './affine.service';

describe('AffineService', () => {
  let service: AffineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
