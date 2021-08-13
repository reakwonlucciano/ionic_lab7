import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinstercountriesPageRoutingModule } from './leinstercountries-routing.module';

import { LeinstercountriesPage } from './leinstercountries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinstercountriesPageRoutingModule
  ],
  declarations: [LeinstercountriesPage]
})
export class LeinstercountriesPageModule {}
