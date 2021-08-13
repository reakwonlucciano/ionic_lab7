import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtcountriesPage } from './connaughtcountries.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtcountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtcountriesPageRoutingModule {}
