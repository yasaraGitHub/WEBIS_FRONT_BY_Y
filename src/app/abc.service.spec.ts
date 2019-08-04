import { TestBed } from '@angular/core/testing';

import { AbcService } from './abc.service';

describe('AbcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbcService = TestBed.get(AbcService);
    expect(service).toBeTruthy();
  });
});
