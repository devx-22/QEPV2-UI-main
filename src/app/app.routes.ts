import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { UniteListComponent } from './unite-list/unite-list.component';
import { ProgrammeListComponent } from './programmes/programme-list/programme-list.component';
import { ProgrammeFormComponent } from './programmes/programme-form/programme-form.component';
import { DummyComponent } from './dummy/dummy.component';
import {GraphiquesComponent} from './pages/graphiques/graphiques.component';
import {PrelevementsComponent} from './pages/prelevements/prelevements.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'prelevements', pathMatch: 'full' },
      { path: 'prelevements', component: PrelevementsComponent },
      { path: 'statistiques', component: GraphiquesComponent },
      { path: 'demandes', component: DummyComponent }, // ✅ FIXED: no nested LayoutComponent
      { path: 'prelevements', component: UniteListComponent },
      { path: 'qep/programmes', component: ProgrammeListComponent },
      { path: 'qep/programmes/nouveau', component: ProgrammeFormComponent },
      { path: '**', redirectTo: '' } // catch-all inside layout
    ]
  },
  { path: '**', redirectTo: '' } // fallback at root
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
