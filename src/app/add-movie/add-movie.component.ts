///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../movie/movie.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {


  movie: Movie=new Movie;

  manualGenreEntry=false;
  title: string;
  messaage: string;

  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  ngOnInit() {

  }

  addMovie(){

    console.log(this.movie);
    this.http.post(environment.endpointBase +'add',JSON.stringify(this.movie),{headers:{'Content-Type': 'application/json'}, responseType:'text'} ).subscribe(res=>{
    this.title="Pomyślnie dodano film!";
    this.messaage="Film "+this.movie.title+ " został zapisany w bazie.";
    this.dialogMessage();

    });

  }

  dialogMessage(){
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      height: '250px',
      position: {top: '0%', left: '40%'},
      data: { title: this.title, message: this.messaage }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.messaage = result;
    });

  }


}


