import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddestudentComponent } from './addestudent.component';

describe('AddestudentComponent', () => {
  let component: AddestudentComponent;
  let fixture: ComponentFixture<AddestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
