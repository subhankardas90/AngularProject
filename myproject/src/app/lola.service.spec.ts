import { TestBed } from '@angular/core/testing';

import { LolaService } from './lola.service';

describe('LolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LolaService = TestBed.get(LolaService);
    expect(service).toBeTruthy();
  });
});
