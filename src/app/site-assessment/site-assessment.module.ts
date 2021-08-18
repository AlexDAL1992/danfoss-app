import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiteAssessmentPageRoutingModule } from './site-assessment-routing.module';

import { SiteAssessmentPage } from './site-assessment.page';
import { DriveFormComponent } from '../drives/drive/drive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SiteAssessmentPageRoutingModule
  ],
  declarations: [SiteAssessmentPage, DriveFormComponent],
  entryComponents: [DriveFormComponent]
})
export class SiteAssessmentPageModule {}
