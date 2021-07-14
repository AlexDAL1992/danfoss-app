import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAssessmentPage } from './search-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAssessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAssessmentPageRoutingModule {}
