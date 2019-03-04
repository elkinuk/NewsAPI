import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Source } from './source'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {

  private key: string;
  private url: string;

  private _sources: BehaviorSubject<Source[]>;
  public dataStore: { sources: Source[] } = { sources: [], };
  sources: Observable<Source[]>

  constructor(private http: HttpClient) {
    this.key = '67c1acd35f714c8da11288faf6e12bcf';
    this.url = 'https://newsapi.org/v2/sources?apiKey=' + this.key;

    this._sources = <BehaviorSubject<Source[]>>new BehaviorSubject([]);
    this.sources = this._sources.asObservable();
   }

  getAllSources() {
    return this.http.get<Source>(this.url)
      .subscribe((data: any) => {
        this.dataStore.sources = data.sources;
        this._sources.next(Object.assign({}, this.dataStore).sources)
      }, error => console.error('Could not load data.'));
  }

  getData(){
    return this.sources;
  }
}
