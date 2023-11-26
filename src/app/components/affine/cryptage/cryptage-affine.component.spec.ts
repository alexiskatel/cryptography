import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptageAffineComponent } from './cryptage-affine.component';

describe('CryptageAffineComponent', () => {
  let component: CryptageAffineComponent;
  let fixture: ComponentFixture<CryptageAffineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptageAffineComponent]
    });
    fixture = TestBed.createComponent(CryptageAffineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
