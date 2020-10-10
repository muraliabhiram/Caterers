import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CaterHeaderComponent } from './cater-header.component';


describe('CaterHeaderComponent', () => {
  let component: CaterHeaderComponent;
  let fixture: ComponentFixture<CaterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
