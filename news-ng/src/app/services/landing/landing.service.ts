import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LandingService {
    private _username: BehaviorSubject<string>;
    private _title: BehaviorSubject<string>;
    public dataStore: { username: string, title: string } = { username: '', title: '' };
    username: Observable<string>;
    title: Observable<string>

    constructor(){
        this._username = <BehaviorSubject<string>>new BehaviorSubject('');
        this.username = this._username.asObservable();

        this._title = <BehaviorSubject<string>>new BehaviorSubject('');
        this.title = this._title.asObservable();
    }

    getTitleBlockValue(){
        return this.title;
    }

    updateTitleBlockValue(data: string){
        this.dataStore.title = data;
        this._title.next(Object.assign({}, this.dataStore).title)
    }  
    
    getLoginValue(){
        return this.username;
    }

    updateLoginValue(data: string){
        this.dataStore.username = data;
        this._username.next(Object.assign({}, this.dataStore).username)
    }  
}