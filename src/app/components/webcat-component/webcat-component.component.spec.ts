import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcatComponentComponent } from './webcat-component.component';

describe('WebcatComponentComponent', () => {
  let component: WebcatComponentComponent;
  let fixture: ComponentFixture<WebcatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcatComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
