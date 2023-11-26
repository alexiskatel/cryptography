import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptagePolybeComponent } from './cryptage-polybe.component';

describe('CryptagePolybeComponent', () => {
  let component: CryptagePolybeComponent;
  let fixture: ComponentFixture<CryptagePolybeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptagePolybeComponent]
    });
    fixture = TestBed.createComponent(CryptagePolybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
