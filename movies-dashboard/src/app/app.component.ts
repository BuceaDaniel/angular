import { Component, OnInit, HostListener } from "@angular/core";
import { environment } from "../environments/environment";
import { MovieAPIService } from "../services/movie-api.service";
import { FavourtieMovieService } from "../services/favourtie-movie.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  private movieTitle: String = "";
  private resultNumber: Number;
  private movies: Array<any> = [];
  private favMovies: Array<any> = [];
  constructor(
    private movieAPIService: MovieAPIService,
    private favMovieService: FavourtieMovieService
  ) {}

  ngOnInit() {
    this.favMovies = this.favMovieService.getList();
  }

  getMovie(movieName: String) {
    this.movieAPIService
      .getMovies(movieName)
      .pipe(debounceTime(500))
      .subscribe(observer => {
        if (observer.Response == "True") {
          this.resultNumber = observer.totalResults;
          this.movies = observer.Search;
        } else {
          this.movies = [];
          this.resultNumber = 0;
        }
      });
  }

  search(type: String = "input") {
    if (this.movieTitle.length >= 3 || type == "click")
      this.getMovie(this.movieTitle);
  }

  addToFavourite(movie) {
    var resp = this.favMovieService.add(movie);
    if (resp.status == "success") {
      this.favMovies = resp.movieList;
    }
  }
  removeFavourite(id) {
    var resp = this.favMovieService.remove(id);
    if (resp.status == "success") {
      this.favMovies = resp.movieList;
    }
  }

  viewDetails(id) {
    this.movieAPIService.getMovie(id).subscribe(observer => {
      console.log(observer);
    });
  }
}
