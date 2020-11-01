import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from './country-model';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json, */*',
      'Access-Control-Allow-Origin': 'http://ec2-54-246-147-1.eu-west-1.compute.amazonaws.com:5000'
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };
  
  getData(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>('https://restcountries.eu/rest/v2/all');
  }

  getDetails(countryName: string): Observable<any> {
    return this.http.get(`http://localhost:5000/country/${countryName}`, this.httpOptions);
  }
}
