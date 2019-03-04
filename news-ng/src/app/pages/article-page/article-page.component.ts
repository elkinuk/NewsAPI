import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  public articleId: string;
  public articleData: any;
  public basicNewsImg: string;

  constructor(private route: ActivatedRoute, private landingService: LandingService, private articlesService: ArticlesService) {
    this.articleData = {};
  }

  showTitleBlock(title: string) {
    this.landingService.updateTitleBlockValue(title);
  }

  showArticle(){
    this.articleData = this.articlesService.dataStore.articles.find((el) => el.id === this.articleId);
  }

  ngOnInit() {
    this.articleId = this.route.snapshot.params['id'];
    this.showArticle();
    this.showTitleBlock(this.articleData.title);

    this.basicNewsImg = `https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3`;
  }

}

