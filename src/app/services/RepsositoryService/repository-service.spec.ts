import { TestBed } from '@angular/core/testing';

import { RepsositoryService } from './repository-service';

describe('RepsositoryService', () => {
  let service: RepsositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepsositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
