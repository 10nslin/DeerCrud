import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerEditComponent } from './deer-edit.component';

describe('DeerEditComponent', () => {
  let component: DeerEditComponent;
  let fixture: ComponentFixture<DeerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
