import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import {HttpClientModule} from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieBoxComponent } from './movie/movie-box/movie-box.component';
import { SingleMovieBoxComponent } from './movie/single-movie-box/single-movie-box.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS, MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    AboutComponent,
    MovieComponent,
    AddMovieComponent,
    MovieBoxComponent,
    SingleMovieBoxComponent,
    DialogComponent,


  ],
  entryComponents:[
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'movie/:id',
        component: SingleMovieBoxComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'new',
        component: AddMovieComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
