import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtPageRoutingModule } from './Connaught-routing.module';

import { ConnaughtPage } from './connaught.page';
import { ConnaughtcountriesPageModule } from '../connaughtcountries/connaughtcountries.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtPageRoutingModule,
    ConnaughtcountriesPageModule
  ],

  declarations: [ConnaughtPage]
})
export class ConnaughtPageModule {}

