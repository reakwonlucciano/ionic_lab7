import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtcountriesPageRoutingModule } from './connaughtcountries-routing.module';

import { ConnaughtcountriesPage } from './connaughtcountries.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtcountriesPageRoutingModule
  ],
  exports: [ConnaughtcountriesPage],
  declarations: [ConnaughtcountriesPage]
})
export class ConnaughtcountriesPageModule {}
