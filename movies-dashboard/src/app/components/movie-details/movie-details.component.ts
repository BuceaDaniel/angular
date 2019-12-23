import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieAPIService } from "src/services/movie-api.service";
import { FavourtieMovieService } from "src/services/favourtie-movie.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.sass"]
})
export class MovieDetailsComponent implements OnInit {
  private movieId: String;
  private defaultPoster: String = "../../../assets/img/no-poster.jpg";
  private currentMovie: any = { Poster: this.defaultPoster };

  private movieDet: String = "";
  MOVIE_DETAILS_KEY = ["Rated", "Released", "Runtime"];

  constructor(
    private movieAPIService: MovieAPIService,
    private activatedRoute: ActivatedRoute,
    private favMovieService: FavourtieMovieService,
    private toastrService: ToastrService
  ) {
    this.movieId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    if (this.movieId) {
      this.movieAPIService.getMovie(this.movieId).subscribe(observer => {
        this.currentMovie = observer;
        this.MOVIE_DETAILS_KEY.forEach(el => {
          this.movieDet +=
            this.currentMovie[el] != "N/A" ? this.currentMovie[el] + " | " : "";
        });
        this.movieDet =
          this.movieDet[this.movieDet.length - 2] == "|"
            ? this.movieDet.slice(0, this.movieDet.length - 2)
            : this.movieDet;
        console.log("12", this.movieDet);
      });
    }
  }

  addToFavourite(movie) {
    var resp = this.favMovieService.add(movie);
    if (resp.status == "success") {
      this.toastrService.success(resp.message);
      // this.favMovies = resp.movieList;
    } else {
      this.toastrService.warning(resp.message);
    }
  }
}
