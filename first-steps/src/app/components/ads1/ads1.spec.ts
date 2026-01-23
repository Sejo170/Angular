import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads1 } from './ads1';

describe('Ads1', () => {
  let component: Ads1;
  let fixture: ComponentFixture<Ads1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ads1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ads1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
