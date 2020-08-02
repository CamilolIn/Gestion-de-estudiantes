import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetstudentComponent } from './detstudent.component';

describe('DetstudentComponent', () => {
  let component: DetstudentComponent;
  let fixture: ComponentFixture<DetstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
