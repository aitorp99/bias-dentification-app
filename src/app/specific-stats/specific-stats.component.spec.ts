import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificStatsComponent } from './specific-stats.component';

describe('SpecificStatsComponent', () => {
  let component: SpecificStatsComponent;
  let fixture: ComponentFixture<SpecificStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
