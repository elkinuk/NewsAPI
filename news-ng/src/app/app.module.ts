import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsPageModule } from 'src/app/pages/news-page/news-page.module';
import { EditPageModule } from 'src/app/pages/edit-page/edit-page.module';
import { AddPageModule } from 'src/app/pages/add-page/add-page.module';
import { LoginPageModule } from 'src/app/pages/login-page/login-page.module';
import { ArticlePageModule } from 'src/app/pages/article-page/article-page.module';
import { NotFoundPageModule } from 'src/app/pages/not-found-page/not-found-page.module';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleFormModule } from './modules/article-form/article-form.module';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsPageModule,
    EditPageModule,
    AddPageModule,
    LoginPageModule,
    ArticlePageModule,
    NotFoundPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
