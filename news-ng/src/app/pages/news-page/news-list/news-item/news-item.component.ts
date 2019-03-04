import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from 'src/app/services/landing/landing.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  public basicNewsImg: string;
  public newsItemStyles: any;

  constructor(private router: Router, private landingService: LandingService){
    this.deleteMyArticle = this.deleteMyArticle.bind(this);
    this.redirectToArticle = this.redirectToArticle.bind(this);
  }

  @Input() articleData: any;
  @Input() deleteArticle: any;

  currentUserIsCreator(){
   return  this.articleData.creator === this.landingService.getLoginValue();
  }

  redirectToArticle(){
    this.router.navigate([`/news/${this.articleData.id}`]);
  }
  
  deleteMyArticle(){
    this.deleteArticle(this.articleData.id);
  }

  ngOnInit() {
    this.basicNewsImg = `https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3`;
    this.newsItemStyles = {
      'background-image': `url('${this.articleData.urlToImage || this.basicNewsImg}')`
    }
  }
}
