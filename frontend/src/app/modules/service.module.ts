import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppFacade } from '../core/facades/app.facade';
import { AppFunctionService } from '../core/functions/app.function';
import { StorageService } from '../core/services/storage/Storage.service';
import { UserService } from '../core/services/storage/User.service';
import { HttpService } from '../core/services/api/Http.service';

@NgModule({
  declarations: [],
  providers: [AppFacade, AppFunctionService, StorageService,UserService,HttpService],
  exports: [HttpClientModule],
  imports: [HttpClientModule],
})
export class ServiceModule {}
