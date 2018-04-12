import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeerNewComponent } from './deer-new/deer-new.component';
import { DeerShowComponent } from './deer-show/deer-show.component';
import { DeerListComponent } from './deer-list/deer-list.component';
import { DeerEditComponent } from './deer-edit/deer-edit.component';

const routes: Routes = [
  {path: 'addDeer', component: DeerNewComponent},
  {path: 'deer/:id', component: DeerShowComponent},
  {path: 'deer/:id/edit', component: DeerEditComponent},
  {path: '', component: DeerListComponent},
  {path: 'deer', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
