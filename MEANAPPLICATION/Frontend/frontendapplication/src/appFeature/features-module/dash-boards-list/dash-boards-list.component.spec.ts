import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardsListComponent } from './dash-boards-list.component';

describe('DashBoardsListComponent', () => {
  let component: DashBoardsListComponent;
  let fixture: ComponentFixture<DashBoardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
