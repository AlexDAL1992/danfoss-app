import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAssessmentPageRoutingModule } from './search-assessment-routing.module';

import { SearchAssessmentPage } from './search-assessment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAssessmentPageRoutingModule
  ],
  declarations: [SearchAssessmentPage]
})
export class SearchAssessmentPageModule {}
