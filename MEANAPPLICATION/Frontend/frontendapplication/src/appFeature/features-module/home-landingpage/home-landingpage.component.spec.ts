import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingpageComponent } from './home-landingpage.component';

describe('HomeLandingpageComponent', () => {
  let component: HomeLandingpageComponent;
  let fixture: ComponentFixture<HomeLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
