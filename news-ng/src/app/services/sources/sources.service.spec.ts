import { TestBed } from '@angular/core/testing';

import { SourcesService } from './sources.service';

describe('SourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourcesService = TestBed.get(SourcesService);
    expect(service).toBeTruthy();
  });
});
