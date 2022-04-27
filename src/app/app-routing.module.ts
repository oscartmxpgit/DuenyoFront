import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegocioComponent } from './negocio/negocio.component';

const routes: Routes = [
  {
    path: 'negocio',
    component: NegocioComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
