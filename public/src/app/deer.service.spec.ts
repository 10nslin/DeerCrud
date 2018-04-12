import { TestBed, inject } from '@angular/core/testing';

import { DeerService } from './deer.service';

describe('DeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeerService]
    });
  });

  it('should be created', inject([DeerService], (service: DeerService) => {
    expect(service).toBeTruthy();
  }));
});
