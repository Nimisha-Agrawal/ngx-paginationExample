import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path:'table',component:PaginationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
