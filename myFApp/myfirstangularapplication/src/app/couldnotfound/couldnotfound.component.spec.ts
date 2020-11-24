import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouldnotfoundComponent } from './couldnotfound.component';

describe('CouldnotfoundComponent', () => {
  let component: CouldnotfoundComponent;
  let fixture: ComponentFixture<CouldnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouldnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouldnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
