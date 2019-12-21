import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieAPIService {
  private url: String;
  constructor(private http: HttpClient) {
    this.url = "http://www.omdbapi.com/?apikey=" + environment.API_KEY;
  }
  public getMovies(movieName: String): Observable<any> {
    return this.http.get(this.url + "&s=" + movieName);
  }
  public getMovie(movieId: String): Observable<any> {
    return this.http.get(this.url + "&i=" + movieId);
  }
}
