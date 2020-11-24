import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterserviceComponent } from './toasterservice.component';

describe('ToasterserviceComponent', () => {
  let component: ToasterserviceComponent;
  let fixture: ComponentFixture<ToasterserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
