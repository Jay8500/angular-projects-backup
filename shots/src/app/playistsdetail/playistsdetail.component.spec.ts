import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayistsdetailComponent } from './playistsdetail.component';

describe('PlayistsdetailComponent', () => {
  let component: PlayistsdetailComponent;
  let fixture: ComponentFixture<PlayistsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayistsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayistsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
