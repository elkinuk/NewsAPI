import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { ArticleFormModule } from 'src/app/modules/article-form/article-form.module';


@NgModule({
  declarations: [EditPageComponent],
  imports: [CommonModule, ArticleFormModule],
  exports: [EditPageComponent]
})
export class EditPageModule { }
