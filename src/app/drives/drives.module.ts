import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivesPageRoutingModule } from './drives-routing.module';

import { DrivesPage } from './drives.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DrivesPageRoutingModule
  ],
  declarations: [DrivesPage]
})
export class DrivesPageModule {}
