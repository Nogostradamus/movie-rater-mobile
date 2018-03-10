import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieInput } from '../models/movieInput';
import { RadDataFormComponent } from 'nativescript-pro-ui/dataform/angular';
import { SnackBar } from 'nativescript-snackbar';
import { MovieService } from '../services/movie.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-imput-movie',
  templateUrl: './imput-movie.component.html',
  styleUrls: ['./imput-movie.component.scss'],
  providers: [MovieService]
})
export class ImputMovieComponent implements OnInit {

  input: MovieInput;
  loading;
  is_edit: boolean;
  id: number;
  @ViewChild('myMovieForm') myMovieFormComp: RadDataFormComponent;


  constructor(private movieService:MovieService, private router: RouterExtensions,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];
    if (this.id >= 0) {
      this.is_edit = true;
      this.movieService.getMovie(this.id).subscribe(
        movie => {
          this.input = new MovieInput(movie['title'], movie['description']);
        },
        error => {
            console.log('error', error);
        }
      );
    } else {
      this.is_edit = false;
      this.input = new MovieInput('', '');
    }
    this.loading = false;
    
   }

  saveMovie(){
    if(!this.myMovieFormComp.dataForm.hasValidationErrors()) {
      this.loading = true;
      const movieData = {title: this.input.title, description: this.input.description}
      if (this.is_edit) {
        this.movieService.editMovie(movieData, this.id)
          .subscribe(
              (response) => {
                this.router.navigate(["/item", this.id], { clearHistory: true });
              },
              (error) => {
                  this.loading = false;
                  new SnackBar().simple("Incorrect Credentials. Please try again.");
              }
          );
        
      } else {
        this.movieService.addMovie(movieData)
          .subscribe(
              (response) => {
                this.router.navigate(["/items"], { clearHistory: true });
              },
              (error) => {
                  this.loading = false;
                  new SnackBar().simple("Incorrect Credentials. Please try again.");
              }
          );
      }
    } else {
      (new SnackBar()).simple("All Fields Required!");
    }
  }

}
