import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayistslistComponent } from './playistslist.component';

describe('PlayistslistComponent', () => {
  let component: PlayistslistComponent;
  let fixture: ComponentFixture<PlayistslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayistslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayistslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
