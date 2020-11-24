import { TestBed } from '@angular/core/testing';

import { UseMeService } from './use-me.service';

describe('UseMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseMeService = TestBed.get(UseMeService);
    expect(service).toBeTruthy();
  });
});
