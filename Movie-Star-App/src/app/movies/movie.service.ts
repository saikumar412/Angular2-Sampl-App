import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IMovie } from './movie';

@Injectable()
export class MovieService {
    private _movieUrl = 'https://angular-ii-movie-list.firebaseio.com/.json';

    constructor(private _http: Http) {}
    
    getMovies(): Observable<IMovie[]>{
        return this._http.get(this._movieUrl)
             .map((response: Response) => <IMovie[]> response.json())
             .do(data => console.log('All: ' + JSON.stringify(data)))
             .catch(this.handleError);
    }

    getMovie(id: number): Observable<IMovie> {
        return this.getMovies()
            .map((movies: IMovie[]) => movies.find(m => m.movieId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }   
}