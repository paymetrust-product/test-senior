import { UserQuery } from './../store/user$/user.query';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppFacade } from '../core/facades/app.facade';
import { AppFunctionService } from '../core/functions/app.function';
import { StorageService } from '../core/services/storage/Storage.service';
import { UserService } from '../core/services/storage/User.service';
import { HttpService } from '../core/services/api/Http.service';
import { ToastService } from '../core/utils/toast.service';
import { UtilsFacades } from '../core/facades/utils.facade';
import { StatesFacades } from '../core/facades/state.facade';
import { DefaultUser } from '../store/user$/user.initial';
import { UserStore } from '../store/user$/user.store';

@NgModule({
  declarations: [],
  providers: [
    AppFacade,
    AppFunctionService,
    StorageService,
    UserService,
    HttpService,
    ToastService,
    UtilsFacades,
    StatesFacades,
    UserQuery,
    UserStore,
    StatesFacades
  ],
  exports: [HttpClientModule],
  imports: [HttpClientModule],
})
export class ServiceModule {}
