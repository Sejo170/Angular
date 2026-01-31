import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoValorant } from './info-valorant';

describe('InfoValorant', () => {
  let component: InfoValorant;
  let fixture: ComponentFixture<InfoValorant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoValorant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoValorant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
