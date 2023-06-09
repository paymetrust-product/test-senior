import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { guestGuard } from './guest.guard';
import AuthUserLocalStorageSingletonRepository from 'src/core/admin/auth/repositories/AuthUserLocalStorageSingletonRepository';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';

describe('guestGuard', () => {
  let executeGuard: CanActivateFn
  let AuthUserLocalStorageSingletonRepositorySpy: Partial<AuthUserLocalStorageSingletonRepository>
  let routerStub: Partial<Router>

  beforeEach(() => {
    AuthUserLocalStorageSingletonRepositorySpy = {
      haveCurrentUser: false
    }

    const authUserLocalStorageServiceStub = {
      authUserLocalStorageSingletonService: AuthUserLocalStorageSingletonRepositorySpy
    }

    routerStub = {
      navigate: jasmine.createSpy().and.returnValue(true)
    }

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthUserLocalStorageService, useValue: authUserLocalStorageServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    });

    executeGuard = (...guardParameters) =>
      TestBed.runInInjectionContext(() => guestGuard(...guardParameters));
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true', () => {
    AuthUserLocalStorageSingletonRepositorySpy.haveCurrentUser = false
    const returnedValue = TestBed.runInInjectionContext(() => {
      return executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
    })
    expect(routerStub.navigate).toHaveBeenCalledTimes(0)
    expect(returnedValue).toBeTrue
  })

  it('should return false', () => {
    AuthUserLocalStorageSingletonRepositorySpy.haveCurrentUser = true
    const returnedValue = TestBed.runInInjectionContext(() => {
      return executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
    })

    expect(routerStub.navigate).toHaveBeenCalledWith(["/space"])
    expect(returnedValue).toBeFalse
  })
});
