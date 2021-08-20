import { TestBed } from '@angular/core/testing';

import { RecuperarPostsService } from './recuperar-posts.service';

describe('RecuperarPostsService', () => {
  let service: RecuperarPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperarPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
