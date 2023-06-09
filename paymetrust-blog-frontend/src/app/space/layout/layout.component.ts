import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { AuthUserLocalStorageService } from 'src/app/services/auth-user-local-storage/auth-user-local-storage.service';
import SpaceLayoutViewModel from 'src/core/admin/space/layout/viewModel/SpaceLayoutViewModel';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') templatePageContainer!: ElementRef
  viewModel: SpaceLayoutViewModel;
  pageActivitySubscription!: Subscription


  constructor(private authUserLocalStorageService: AuthUserLocalStorageService, private router: Router) {
    this.viewModel = new SpaceLayoutViewModel(this.authUserLocalStorageService.authUserLocalStorageSingletonService)
  }

  ngAfterViewInit(): void {
    const mouseMove$: Observable<MouseEvent> = fromEvent(this.templatePageContainer.nativeElement, 'mousemove')
    const keydown$: Observable<KeyboardEvent> = fromEvent(this.templatePageContainer.nativeElement, 'keydown')
    const click$: Observable<PointerEvent> = fromEvent(this.templatePageContainer.nativeElement, 'click')

    this.pageActivitySubscription = this.viewModel.initInactivitiesLogout(
      [mouseMove$, keydown$, click$],
      10,
      this.navigateToLogin.bind(this)
    )
  }

  ngOnDestroy(): void {
    this.pageActivitySubscription.unsubscribe()
  }

  navigateToLogin() {
    this.router.navigate(["/auth/login"])
  }
}
