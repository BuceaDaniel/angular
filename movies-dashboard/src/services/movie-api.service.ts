import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const MOVIE_API = "59c5c7ee";

@Injectable({
  providedIn: "root"
})
export class MovieAPIService {
  private url: String;
  constructor(private http: HttpClient) {
    this.url = "http://www.omdbapi.com/?apikey=" + MOVIE_API;
  }
  public getMovies(movieName: String, page: Number): Observable<any> {
    let mUrl =
      page == 0
        ? this.url + "&s=" + movieName
        : this.url + "&s=" + movieName + "&page=" + page;
    return this.http.get(mUrl);
  }
  public getMovie(movieId: String): Observable<any> {
    return this.http.get(this.url + "&i=" + movieId);
  }
}
