import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibPage } from './bib.page';

const routes: Routes = [
  {
    path: '',
    component: BibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibPageRoutingModule {}
