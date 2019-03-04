import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPageComponent } from './add-page.component';
import { ArticleFormModule } from 'src/app/modules/article-form/article-form.module';

@NgModule({
  declarations: [AddPageComponent],
  imports: [
    CommonModule,
    ArticleFormModule
  ],
  exports: [AddPageComponent]
})
export class AddPageModule { }
