import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeinstercountriesPage } from './leinstercountries.page';

const routes: Routes = [
  {
    path: '',
    component: LeinstercountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeinstercountriesPageRoutingModule {}
