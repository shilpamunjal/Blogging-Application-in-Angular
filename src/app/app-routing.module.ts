import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { MatCard } from '@angular/material/card';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

const routes: Routes = [
  {path:'create-post',component:CreatePostComponent},
  {path:'view-all',component:ViewAllComponent},
  {path:'view-post/:id',component:ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
