import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteAssessmentPageRoutingModule } from './site-assessment-routing.module';

import { SiteAssessmentPage } from './site-assessment.page';
import { AddDriveComponent } from '../drives/add-drive/add-drive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SiteAssessmentPageRoutingModule
  ],
  declarations: [SiteAssessmentPage, AddDriveComponent],
  entryComponents: [AddDriveComponent]
})
export class SiteAssessmentPageModule {}
