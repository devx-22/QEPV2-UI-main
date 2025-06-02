import { TestBed } from '@angular/core/testing';

import { YourFeatureService } from './your-feature.service';

describe('YourFeatureService', () => {
  let service: YourFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
