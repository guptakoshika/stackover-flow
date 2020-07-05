import { TestBed } from '@angular/core/testing';

import { CommentProviderService } from './comment-provider.service';

describe('CommentProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentProviderService = TestBed.get(CommentProviderService);
    expect(service).toBeTruthy();
  });
});
