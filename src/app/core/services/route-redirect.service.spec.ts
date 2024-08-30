import { TestBed } from '@angular/core/testing';

import { RouteRedirectService } from './route-redirect.service';

describe('RouteRedirectService', () => {
  let service: RouteRedirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteRedirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
