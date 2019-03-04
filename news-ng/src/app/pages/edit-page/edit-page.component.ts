import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from 'src/app/services/landing/landing.service';
import { NgForm } from '@angular/forms';

import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  public articleId: string;
  public articleData: any;
  private isAuthorised: boolean;

  constructor(private router: Router ,private route: ActivatedRoute, private landingService: LandingService, private articlesSetvice: ArticlesService) {
    this.articleData = {source: {}}
    this.saveData = this.saveData.bind(this);
  }

  showTitleBlock(title: string) {
    this.landingService.updateTitleBlockValue(title);
  }

  saveData(form: any){
    const newArticle = form.value;
    
    newArticle.source = {};
    newArticle.source.name = newArticle.sourceName;
    newArticle.source.id = newArticle.sourceId;
    newArticle.id = this.articleData.id;
    newArticle.creator = this.articleData.creator;
    newArticle.publishedAt = this.articleData.publishedAt;

    this.articlesSetvice.updateArticle(newArticle);
  }

  ngOnInit() {
    this.landingService.getLoginValue().subscribe((data)=>{
      this.isAuthorised = !!data;
    });

    if(this.isAuthorised){
      this.showTitleBlock('Edit');
      this.articleId = this.route.snapshot.params['id'];
      this.articlesSetvice.getData().subscribe((data:any)=>{this.articleData = data.find((el) => el.id === this.articleId);});
    } else this.router.navigate(['/news']);
  }
}
