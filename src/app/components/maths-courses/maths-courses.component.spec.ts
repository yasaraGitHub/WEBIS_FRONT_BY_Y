import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsCoursesComponent } from './maths-courses.component';

describe('MathsCoursesComponent', () => {
  let component: MathsCoursesComponent;
  let fixture: ComponentFixture<MathsCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
