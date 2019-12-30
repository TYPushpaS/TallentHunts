import { TestBed } from '@angular/core/testing';

import { AddRequirementService } from './requirements.service';

describe('AddRequirementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRequirementService = TestBed.get(AddRequirementService);
    expect(service).toBeTruthy();
  });
});
