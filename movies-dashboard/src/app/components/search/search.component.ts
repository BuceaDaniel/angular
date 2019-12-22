import { Component, OnInit } from "@angular/core";
import { MovieAPIService } from "../../../services/movie-api.service";
import { FavourtieMovieService } from "../../../services/favourtie-movie.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.sass"]
})
export class SearchComponent implements OnInit {
  private resultNumber: Number = 0;
  private currentPage: Number = 1;
  private movies: Array<any> = [];
  private movieTitle: String = "";
  private defaultPoster: String = "../../../assets/img/no-poster.jpg";
  constructor(
    private movieAPIService: MovieAPIService,
    private favMovieService: FavourtieMovieService
  ) {}

  ngOnInit() {}

  getMovie(movieName: String, page: Number = 0) {
    this.movieAPIService
      .getMovies(movieName, page)
      .pipe(debounceTime(500))
      .subscribe(observer => {
        if (observer.Response == "True") {
          this.resultNumber = observer.totalResults;
          console.log(this.resultNumber);
          this.movies = observer.Search;
        } else {
          this.movies = [];
          this.resultNumber = 0;
        }
      });
  }

  search(type: String = "input") {
    if (this.movieTitle.length >= 1 || type == "click")
      this.getMovie(this.movieTitle);
  }

  loadPage(event) {
    this.getMovie(this.movieTitle, event);
  }
}
