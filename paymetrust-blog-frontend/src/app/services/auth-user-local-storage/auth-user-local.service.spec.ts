import { TestBed } from '@angular/core/testing';

import { AuthUserLocalStorageService } from './auth-user-local-storage.service';

describe('AuthUserStorageService', () => {
  let service: AuthUserLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
