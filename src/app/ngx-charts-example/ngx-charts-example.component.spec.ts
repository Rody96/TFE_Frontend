import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsExampleComponent } from './ngx-charts-example.component';

describe('NgxChartsExampleComponent', () => {
  let component: NgxChartsExampleComponent;
  let fixture: ComponentFixture<NgxChartsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
