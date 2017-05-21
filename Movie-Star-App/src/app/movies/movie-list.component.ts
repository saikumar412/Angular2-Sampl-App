import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'pm-movies',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    movies: IMovie[];
        
    constructor(private _movieService: MovieService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._movieService.getMovies()
            .subscribe(movies => this.movies = movies,
                       error => this.errorMessage = <any>error);
              
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie List: ' + message;
    }
}