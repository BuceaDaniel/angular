import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieAPIService } from "src/services/movie-api.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.sass"]
})
export class MovieDetailsComponent implements OnInit {
  private movieId: String;
  private currentMovie: any = {};
  private defaultPoster: String = "../../../assets/img/no-poster.jpg";

  constructor(
    private movieAPIService: MovieAPIService,
    private activatedRoute: ActivatedRoute
  ) {
    this.movieId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.movieAPIService.getMovie(this.movieId).subscribe(observer => {
      this.currentMovie = observer;
    });
  }
}
