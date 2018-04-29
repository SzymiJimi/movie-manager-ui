import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      var movieId;
      movieId =  params.get('id');
      this.http.get<any>(environment.endpointBase +'movie/'+movieId).subscribe(res => {
        this.movieData=res;
      })
    })

  }

  movieData;


}
