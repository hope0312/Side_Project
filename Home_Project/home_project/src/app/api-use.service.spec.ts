import { TestBed } from '@angular/core/testing';

import { ApiUseService } from './api-use.service';

describe('ApiUseService', () => {
  let service: ApiUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
