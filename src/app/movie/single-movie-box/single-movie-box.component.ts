import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-single-movie-box',
  templateUrl: './single-movie-box.component.html',
  styleUrls: ['./single-movie-box.component.css']
})
export class SingleMovieBoxComponent implements OnInit {

  movie: Movie;
  movieLoaded: boolean= false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe(params =>{
      var movieId;
      movieId =  params.get('id');
      this.http.get<any>(environment.endpointBase +'movie/'+movieId).subscribe(res => {
        this.movie=res;
        this.movieLoaded=true;
        console.log(this.movie);
      })
    })
  }

  ngOnInit() {

  }
}
