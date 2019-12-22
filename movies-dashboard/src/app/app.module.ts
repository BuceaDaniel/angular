import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { StorageServiceModule } from "ngx-webstorage-service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SearchComponent } from "./components/search/search.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    MovieDetailsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
