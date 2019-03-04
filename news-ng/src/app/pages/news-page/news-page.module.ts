import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { SourcesComponent } from './sources-list/sources-list.component';
import { SourceItemComponent } from './sources-list/source-item/source-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsListComponent } from './news-list/news-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByTitlePipe } from './pipes/filter-by-title/filter-by-title.pipe';
import { FilterByMinePipe } from './pipes/filter-by-mine/filter-by-mine.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsItemComponent,
    SourcesComponent,
    SourceItemComponent,
    NavigationComponent,
    NewsListComponent,
    FilterByTitlePipe,
    FilterByMinePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class NewsPageModule { }
