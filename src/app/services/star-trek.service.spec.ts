import { TestBed } from '@angular/core/testing';

import { StarTrekService } from './star-trek.service';

describe('StarTrekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarTrekService = TestBed.get(StarTrekService);
    expect(service).toBeTruthy();
  });
});
