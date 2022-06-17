import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeScriptPage } from './typescript.page';

const routes: Routes = [
  {
    path: '',
    component: TypeScriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeScriptPageRoutingModule {}
