import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerShowComponent } from './deer-show.component';

describe('DeerShowComponent', () => {
  let component: DeerShowComponent;
  let fixture: ComponentFixture<DeerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
