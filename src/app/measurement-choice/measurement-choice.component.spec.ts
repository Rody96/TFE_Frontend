import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementChoiceComponent } from './measurement-choice.component';

describe('MeasurementChoiceComponent', () => {
  let component: MeasurementChoiceComponent;
  let fixture: ComponentFixture<MeasurementChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
