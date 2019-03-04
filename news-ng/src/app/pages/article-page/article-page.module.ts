import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticlePageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticlePageModule { }
