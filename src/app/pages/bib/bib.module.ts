import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibPageRoutingModule } from './bib-routing.module';

import { BibPage } from './bib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibPageRoutingModule
  ],
  declarations: [BibPage]
})
export class BibPageModule {}
