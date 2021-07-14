import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteAssessmentPage } from './site-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: SiteAssessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteAssessmentPageRoutingModule {}
