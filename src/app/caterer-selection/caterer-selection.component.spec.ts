import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatererSelectionComponent } from './caterer-selection.component';

describe('CatererSelectionComponent', () => {
  let component: CatererSelectionComponent;
  let fixture: ComponentFixture<CatererSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatererSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatererSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
