import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formData: FormGroup = new FormGroup({});
  movies: any;
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService

  ) { }

   populateFormData() {
    this.formData = this.formBuilder.group({
      type: ['upcoming'],
      searchQuery: ['']
    })
  }

  onChanges() {
    this.formData.valueChanges.subscribe(async(val) => {
      if(val.searchQuery.length == 0) {
        this.movies = await this.movieService.getMoviesByType(val.type);
      } else {
        this.movies = await this.movieService.getMovieByQuery(val.searchQuery);
      }
      
    });
    
  }

  async ngOnInit() {
     this.populateFormData();
     console.log(this.formData)
     this.movies = await this.movieService.getMoviesByType('top_rated');
     this.onChanges();
  }

}
