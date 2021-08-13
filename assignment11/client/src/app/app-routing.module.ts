import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ShowapiComponent } from './showapi/showapi.component';

const routes: Routes = [
  { path: "", redirectTo: '', pathMatch: 'full'},
  { path: 'view-members', component: ShowapiComponent},
  { path: 'editMembers/:id', component: EditTableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
