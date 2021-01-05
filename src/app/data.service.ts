import { Injectable } from '@angular/core';
import { map, tap, } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = 'https://angular-app-f4d31.firebaseio.com/.json';
  // url = '../assets/ninjas.json';

  fetchData() {
    return this.http.get(this.url).pipe(map(
      res => res
    )); 
  }

  // postData (name, belt) {
  //   return this.http.post(this.url, name, belt ).pipe(map(
  //     res => res
  //   ));
  // }
  
 }

