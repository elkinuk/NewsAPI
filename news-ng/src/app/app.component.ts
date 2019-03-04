import { Component } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';
import { ArticlesService } from './services/articles/articles.service';
import { SourcesService } from './services/sources/sources.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LandingService]
})

export class AppComponent {
  public showTitleBlock: boolean;

  constructor(private articlesService: ArticlesService, private sourcesService: SourcesService) {}

  ngOnInit(){
    this.articlesService.getAllArticles();
    this.sourcesService.getAllSources();
  }
  
}
