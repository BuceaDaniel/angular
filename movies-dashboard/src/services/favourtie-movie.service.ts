import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable, Subscription } from "rxjs";

const STORAGE_KEY = "movieList";

@Injectable({
  providedIn: "root"
})
export class FavourtieMovieService {
  private userMovieList: Array<any> = [];
  private searchCache: any = {
    title: "",
    page: 1
  };
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.userMovieList = this.storage.get(STORAGE_KEY) || [];
  }

  add(movie): any {
    const movieExist = this.userMovieList.find(function(el) {
      return el.imdbID == movie.imdbID;
    });
    if (movieExist) {
      return {
        status: "fail",
        message:
          "The movie: " + movieExist.Title + " is already inside the list"
      };
    } else {
      this.userMovieList.push(movie);
      this.storage.set(STORAGE_KEY, this.userMovieList);
      return {
        status: "success",
        message: "The movie: " + movie.Title + " was added inside the list",
        movieList: this.getList()
      };
    }
  }

  remove(id): any {
    const index = this.userMovieList.findIndex(function(el) {
      return el.imdbID == id;
    });
    if (index != -1) {
      this.userMovieList.splice(index, 1);
      this.storage.set(STORAGE_KEY, this.userMovieList);
      return {
        status: "success",
        message: "The movie was removed from the list",
        movieList: this.getList()
      };
    } else {
      return {
        status: "fail",
        message: "The movie is not inside the list"
      };
    }
  }

  getList(): Array<any> {
    return this.userMovieList;
  }

  setSearchQuery(val): void {
    this.searchCache.title = val.title;
    this.searchCache.page = val.page;
  }

  getSearchQuery(): any {
    return this.searchCache;
  }
}
