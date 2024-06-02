import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonStatsComponent } from './comparison-stats.component';

describe('ComparisonStatsComponent', () => {
  let component: ComparisonStatsComponent;
  let fixture: ComponentFixture<ComparisonStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
