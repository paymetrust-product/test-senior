import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path  : 'admin',
    children : [
      {

      },
      {

      },
      {

      }
    ]
  }
]

@NgModule({
  declarations : [],
  imports :[RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AdminRoutesModule {

}
