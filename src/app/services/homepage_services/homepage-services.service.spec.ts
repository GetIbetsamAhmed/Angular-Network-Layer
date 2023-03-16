import { TestBed } from '@angular/core/testing';

import { HomepageServices } from './homepage-services.service';

describe('HomepageServices', () => {
  let service: HomepageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
