import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {MovieFormComponent} from '../movieForm/MovieFormComponent';
import {Http,Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'movies',
    templateUrl: 'ts/components/movies/movies.html',
    directives: [NgFor, MovieFormComponent,RouterLink]
})
export class MoviesComponent {
    name:string;
    movies:any;
    http:Http;

    constructor(http:Http) {
        this.http = http;
        this.movies = [];
        this.getMovies();
    }

    getMovies() {
        this.http.get('api/movies').map(res => res.json())
            .subscribe((movies)=> {
                this.movies = movies;
            });
    }

    addMovie(movie) {
        this.http.post('api/movies', JSON.stringify(movie),{headers: new Headers({'Content-Type': 'application/json'})})
            .map(res => res.json())
            .subscribe((newMovie)=> {
                this.movies.push(newMovie);
            });
    }
}