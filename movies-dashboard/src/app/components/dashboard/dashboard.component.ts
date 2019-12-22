import { Component, OnInit } from "@angular/core";
import { FavourtieMovieService } from "../../../services/favourtie-movie.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  private favMovies: Array<any> = [];
  constructor(private favMovieService: FavourtieMovieService) {}

  ngOnInit() {
    this.favMovies = this.favMovieService.getList();
  }
  removeFavourite(id) {
    var resp = this.favMovieService.remove(id);
    if (resp.status == "success") {
      this.favMovies = resp.movieList;
    }
  }
}
