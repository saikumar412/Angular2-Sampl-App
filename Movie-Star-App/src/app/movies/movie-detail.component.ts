import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    moduleId: module.id,
    templateUrl: './movie-detail.component.html'
    //styleUrls: ['./movie-list.component.css']
})
export class MovieDetailComponent {
    pageTitle: string = 'Movie Detail';
    movie: IMovie;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _movieService: MovieService){
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.getMovie(id);
    }

    /*ngOnDestroy() {
        this.sub.unsubscribe();
    }*/

    getMovie(id: number) {
        this._movieService.getMovie(id).subscribe(
            movie => this.movie = movie,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/movies']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie Detail: ' + message;
    }
}