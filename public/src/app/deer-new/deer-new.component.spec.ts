import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerNewComponent } from './deer-new.component';

describe('DeerNewComponent', () => {
  let component: DeerNewComponent;
  let fixture: ComponentFixture<DeerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
