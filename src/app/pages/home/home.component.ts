import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResults: any = [];
  tredingMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.tredingData();
  }
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResults = result.results;
    });
  }

  tredingData() {
    this.service.tredingMovieApiData().subscribe((result) => {
      this.tredingMovieResult = result.results;
    });
  }
}
