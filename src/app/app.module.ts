import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

import { routes_provider } from "./app-routing.module";
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [routes_provider, DataService],
  bootstrap: [AppComponent, LoggingService]
})
export class AppModule { }
