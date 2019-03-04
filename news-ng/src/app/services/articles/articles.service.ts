import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private key: string;
  private url: string;
  private allArticlesUrl: string;

  private myArticles: any;

  private _articles: BehaviorSubject<Article[]>;
  private _currentSource: BehaviorSubject<''>;

  articles: Observable<Article[]>;
  currentSource: Observable<any>;

  public dataStore: { articles: Article[], currentSource: any } = { articles: [], currentSource: {} };

  constructor(private http: HttpClient) {
    this.key = '67c1acd35f714c8da11288faf6e12bcf';
    this.url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=' + this.key;
    this.allArticlesUrl = this.url + '&laguage=en';
    this.myArticles = [];

    this._articles = <BehaviorSubject<Article[]>>new BehaviorSubject([]);
    this.articles = this._articles.asObservable();

    this._currentSource = <BehaviorSubject<any>>new BehaviorSubject({});
    this.currentSource = this._currentSource.asObservable();
   }

  _generateID(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getCurrentSource(){
    return this.currentSource;
  }

  updateCurrentSource(data: any){
    this.dataStore.currentSource = data;
    this._currentSource.next(Object.assign({}, this.dataStore).currentSource);
  }

  getData(){
    return this.articles;
  }

  deleteArticle(id: string){
    this.dataStore.articles = this.dataStore.articles.filter(el => el.id !== id);
    this._articles.next(Object.assign({}, this.dataStore).articles);
    this.myArticles = this.myArticles.filter(el => el.id !== id);

  }

  createArticle(article: Article){
    article.id = this._generateID();
    article.source = this.dataStore.currentSource;
    this.dataStore.articles.unshift(article);
    this._articles.next(Object.assign({}, this.dataStore).articles);
    this.myArticles.push(article);
  }

  updateArticle(article: any){
    this.dataStore.articles = this.dataStore.articles.map((el) => el.id === article.id ? article : el);
    this._articles.next(Object.assign({}, this.dataStore).articles);
  }

  getAllArticles() {
    return this.http.get<Article>(this.allArticlesUrl)
      .subscribe((data: any) => {
        data.articles = data.articles.map(el => {
          el.id = this._generateID();
          return el;
        });
        
        this.dataStore.articles = data.articles;
        this._articles.next(Object.assign({}, this.dataStore).articles)
      }, error => console.error('Could not load data.'));
  }

  getSourceArticles(source: string, callback: any) {
    return this.http.get<Article>(this.url + '&sources=' + source)
      .subscribe((data: any) => {
        data.articles = data.articles.map(el => {
          el.id = this._generateID();
          return el;
        });

        data.articles.unshift(...this.myArticles.filter(el => el.source.id === source));

        this.dataStore.articles = data.articles;
        this._articles.next(Object.assign({}, this.dataStore).articles);
        callback();
      }, error => console.error('Could not load data.'));
  }
}
