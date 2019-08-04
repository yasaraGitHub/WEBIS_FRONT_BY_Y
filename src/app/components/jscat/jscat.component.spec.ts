import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscatComponent } from './jscat.component';

describe('JscatComponent', () => {
  let component: JscatComponent;
  let fixture: ComponentFixture<JscatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
