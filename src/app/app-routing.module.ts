import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'site-assessment',
    pathMatch: 'full',
  },
  {
    path: 'site-assessment',
    loadChildren: () =>
      import('./site-assessment/site-assessment.module').then(
        (m) => m.SiteAssessmentPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'drives',
    loadChildren: () =>
      import('./drives/drives.module').then((m) => m.DrivesPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'search-assessment',
    loadChildren: () =>
      import('./search-assessment/search-assessment.module').then(
        (m) => m.SearchAssessmentPageModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
