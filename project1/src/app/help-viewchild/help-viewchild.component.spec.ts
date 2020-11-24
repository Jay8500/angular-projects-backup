import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpViewchildComponent } from './help-viewchild.component';

describe('HelpViewchildComponent', () => {
  let component: HelpViewchildComponent;
  let fixture: ComponentFixture<HelpViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
