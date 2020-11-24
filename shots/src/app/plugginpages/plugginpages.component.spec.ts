import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugginpagesComponent } from './plugginpages.component';

describe('PlugginpagesComponent', () => {
  let component: PlugginpagesComponent;
  let fixture: ComponentFixture<PlugginpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugginpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugginpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
