import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchComponent } from "./components/search/search.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "search", component: SearchComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
