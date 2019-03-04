import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';

import { ArticlesService } from 'src/app/services/articles/articles.service';
import { SourcesService } from 'src/app/services/sources/sources.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  public articlesList: any;
  public sourcesList: any;
  public currentSource: any;
  public newsOnPage: number;
  public newsCount: number;
  public showLocal: boolean;
  public filterValue: string;
  public isAuthorised: boolean;

  constructor(private landingService: LandingService, private articlesService: ArticlesService, private soucesService: SourcesService) {
    this.newsCount = 3;
    this.newsOnPage = this.newsCount;
    this.showLocal = false;
    this.articlesList = [];

    this.setSource = this.setSource.bind(this);
    this.showMore = this.showMore.bind(this);
    this.setShowLocal = this.setShowLocal.bind(this);
    this.setFilterValue = this.setFilterValue.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.showArticles = this.showArticles.bind(this);
  }

  showTitleBlock(title: string) {
    this.landingService.updateTitleBlockValue(title);
  }

  showNewsBySource(sourceId: string){
    this.showSourceArticles();
    this.newsOnPage = this.newsCount;
    if (this.showLocal) this.setShowLocal(true);
  }

  setSource(data: any){
    this.currentSource = data;
    this.articlesService.updateCurrentSource(data);
    this.landingService.updateTitleBlockValue(data.name);
    this.showNewsBySource(data.id);
  }

  showMore(){
    this.newsOnPage += this.newsCount;
  }

  setShowLocal(value: boolean){
    this.showLocal = value;
    this.newsOnPage = this.newsCount;
  }

  setFilterValue(value: string){
    this.filterValue = value;
    this.newsOnPage = this.newsCount;
  }

  deleteArticle(id: string){
    this.articlesService.deleteArticle(id);
    this.showArticles();
  }

  showAllSources() {
    this.soucesService.getData().subscribe( data => { this.sourcesList = data; });
  }

  showArticles() {
    this.articlesService.getData().subscribe( data => { this.articlesList = data; });
  }

  showSourceArticles() {
    this.articlesService.getSourceArticles(this.currentSource.id, this.showArticles);
  }

  setUserName(username: string){
    this.landingService.updateLoginValue(username);
  }

  ngOnInit() {
    this.showAllSources();
    this.showArticles();

    this.showTitleBlock('News');
    this.articlesService.getCurrentSource().subscribe((data) => {
      this.showTitleBlock(data.name || 'News');
    });

    this.landingService.getLoginValue().subscribe((data)=>{
      this.isAuthorised = !!data;
    });
  }

}
