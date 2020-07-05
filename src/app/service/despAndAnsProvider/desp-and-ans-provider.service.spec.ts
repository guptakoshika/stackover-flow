import { TestBed } from '@angular/core/testing';

import { DespAndAnsProviderService } from './desp-and-ans-provider.service';

describe('DespAndAnsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DespAndAnsProviderService = TestBed.get(DespAndAnsProviderService);
    expect(service).toBeTruthy();
  });
});
