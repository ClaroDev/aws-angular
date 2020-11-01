import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CountryModel } from '../country-model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries : CountryModel[] = [];
  searchTerm: string;

  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getData().subscribe(data => {this.countries = data})
  }

}
