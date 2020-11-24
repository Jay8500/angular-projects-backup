import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorreachedComponent } from './errorreached.component';

describe('ErrorreachedComponent', () => {
  let component: ErrorreachedComponent;
  let fixture: ComponentFixture<ErrorreachedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorreachedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorreachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
