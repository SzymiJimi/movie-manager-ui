import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieBoxComponent } from './single-movie-box.component';

describe('SingleMovieBoxComponent', () => {
  let component: SingleMovieBoxComponent;
  let fixture: ComponentFixture<SingleMovieBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovieBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
