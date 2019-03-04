import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';
import { NgForm } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  public articleId: string;
  public articleData: any;
  private isAuthorised: boolean;

  constructor(private router: Router, private landingService: LandingService, private articlesSetvice: ArticlesService) {
    this.saveData = this.saveData.bind(this);
  }

  showTitleBlock(title: string) {
    this.landingService.updateTitleBlockValue(title);
  }

  saveData(form: any){
    const newArticle = form.value;
    
    newArticle.source = {};
    newArticle.creator = this.landingService.getLoginValue();
    newArticle.publishedAt = new Date();
    
    this.articlesSetvice.createArticle(newArticle);
  }

  ngOnInit() {
    this.landingService.getLoginValue().subscribe((data)=>{
      this.isAuthorised = !!data;
    });

    this.isAuthorised ? this.showTitleBlock('Add') : this.router.navigate(['/news']);
  }

}
