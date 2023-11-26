import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptagePolybeComponent } from './decryptage-polybe.component';

describe('DecryptagePolybeComponent', () => {
  let component: DecryptagePolybeComponent;
  let fixture: ComponentFixture<DecryptagePolybeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecryptagePolybeComponent]
    });
    fixture = TestBed.createComponent(DecryptagePolybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
