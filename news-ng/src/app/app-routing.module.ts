import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPageComponent } from 'src/app/pages/news-page/news-page.component';
import { EditPageComponent } from 'src/app/pages/edit-page/edit-page.component';
import { AddPageComponent } from 'src/app/pages/add-page/add-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { ArticlePageComponent } from 'src/app/pages/article-page/article-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsPageComponent},
  {path: 'news/:id', component: ArticlePageComponent},
  {path: 'edit/:id', component: EditPageComponent},
  {path: 'add', component: AddPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
