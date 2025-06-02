import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UniteListComponent } from './unite-list/unite-list.component';
import { ProgrammeListComponent } from './programmes/programme-list/programme-list.component';
import { ProgrammeFormComponent } from './programmes/programme-form/programme-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'qep/programmes', pathMatch: 'full' }, // Default redirect
      { path: 'prelevements', component: UniteListComponent },
      { path: 'qep/programmes', component: ProgrammeListComponent },
      { path: 'qep/programmes/nouveau', component: ProgrammeFormComponent },
    ]
  },
  { path: '**', redirectTo: '' } // Catch-all route
];
