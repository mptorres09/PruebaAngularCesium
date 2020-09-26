import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisorcesiumComponent } from './visorcesium/visorcesium.component';

const routes: Routes = [
  {path: 'visor', component: VisorcesiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
