import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies=[];

  constructor(private http: HttpClient) {
    this.http.get<any>(environment.endpointBase +'movies').subscribe(res => {
      this.movies=res;
      console.log(this.movies);
    })
    };

  ngOnInit() {
  }



}
