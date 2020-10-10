import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterersListComponent } from './caterers-list.component';

describe('CaterersListComponent', () => {
  let component: CaterersListComponent;
  let fixture: ComponentFixture<CaterersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
