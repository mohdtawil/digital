import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMoviesByType(type: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=` + environment.API_KEY).toPromise();
  }
  getMovieByQuery(query: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=` + environment.API_KEY).toPromise();

  }
  
}
