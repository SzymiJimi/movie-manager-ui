import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie={
    title: '',
    genre: '',
    production: '',
    director: '',
    description: '',
    premiereDate: ''
  };



  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  addMovie(){

    this.http.post(environment.endpointBase +'add',JSON.stringify(this.movie),{headers:{'Content-Type': 'application/json'}, responseType:'text'} ).subscribe(res=>{
      console.log(res);
    });

  }

}
