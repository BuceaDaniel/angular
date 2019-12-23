import { Component, OnInit } from "@angular/core";
import { FavourtieMovieService } from "../../../services/favourtie-movie.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  private favMovies: Array<any> = [];
  constructor(
    private favMovieService: FavourtieMovieService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.favMovies = this.favMovieService.getList();
    this.favMovieService.setSearchQuery({ title: "", page: 1 });
  }
  removeFavourite(id) {
    var resp = this.favMovieService.remove(id);
    if (resp.status == "success") {
      this.favMovies = resp.movieList;
      this.toastrService.success(resp.message);
    } else {
      this.toastrService.warning(resp.message);
    }
  }
}
