import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleMatchPage } from './single-match.page';

const routes: Routes = [
  {
    path: '',
    component: SingleMatchPage
  },
  {
    path: ':id',
    component: SingleMatchPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleMatchPage]
})
export class SingleMatchPageModule {}
