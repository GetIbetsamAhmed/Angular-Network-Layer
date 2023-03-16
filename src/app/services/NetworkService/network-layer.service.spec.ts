import { TestBed } from '@angular/core/testing';

import { NetworkLayerService } from './network-layer.service';

describe('NetworkLayerService', () => {
  let service: NetworkLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
