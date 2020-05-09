import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedetailsComponent } from './expedetails.component';

describe('ExpedetailsComponent', () => {
  let component: ExpedetailsComponent;
  let fixture: ComponentFixture<ExpedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
