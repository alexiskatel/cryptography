import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptageAffineComponent } from './decryptage-affine.component';

describe('DecryptageAffineComponent', () => {
  let component: DecryptageAffineComponent;
  let fixture: ComponentFixture<DecryptageAffineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecryptageAffineComponent]
    });
    fixture = TestBed.createComponent(DecryptageAffineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
