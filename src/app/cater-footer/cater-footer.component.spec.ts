import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterFooterComponent } from './cater-footer.component';

describe('CaterFooterComponent', () => {
  let component: CaterFooterComponent;
  let fixture: ComponentFixture<CaterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
