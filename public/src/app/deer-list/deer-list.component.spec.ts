import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerListComponent } from './deer-list.component';

describe('DeerListComponent', () => {
  let component: DeerListComponent;
  let fixture: ComponentFixture<DeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
