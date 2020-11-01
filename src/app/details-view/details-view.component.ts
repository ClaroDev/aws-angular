import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Details } from '../details';
import { delay, take } from 'rxjs/operators';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private http: CountriesService) { }

  population: number;
  flag: string;
  weather: number;
  capital: string;
  name: string;


  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('id');

    this.http.getDetails(this.name).subscribe(data => {
        this.population = JSON.parse(data).population;
        this.weather = JSON.parse(data).weather;
        this.flag = JSON.parse(data).flag;
        this.capital = JSON.parse(data).capital;
      });
  }

}
