import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  @Input() movie: Movie;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // this.genre=this.movie.genre;
    // this.director= this.movie.director;
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params =>{
    //   var movieId;
    //   movieId =  params.get('id');
    //   this.http.get<any>(environment.endpointBase +'movie/'+movieId).subscribe(res => {
    // while (this.movie===undefined)
    // {
    //
    // }

    //     console.log(this.movieData);
    //   })
    // })

  }









}
