import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { weatherApi } from '../../../../environments/api';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  indianCities:any = {}; // Assuming API returns an object like { id: 'city name' }
  cityEntries:any= [];
  selectedCityId: number | null = null;
weatherData:any;
  constructor(private http: HttpServiceService) { }

  ngOnInit(): void {
    this.http.makeGetRequest(weatherApi.getIndianCitiesAPI).subscribe(
      (response) => {
        console.log('Data:', response);
        this.indianCities = response;

        // Convert the object to an array of [id, name] pairs for iteration
        //this.cityEntries = Object.entries(this.indianCities).map(([id, name]) => [Number(id), name]);
        this.cityEntries = Object.entries(this.indianCities)
        .map(([id, name]) => [Number(id), name])
        .sort((a:any, b:any) => {
          const nameA = a[1].toLowerCase();
          const nameB = b[1].toLowerCase();
          return nameA.localeCompare(nameB);
        });
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
 getWeatherForCity(event: Event): void {
  const selectedId = (event.target as HTMLSelectElement).value;
  console.log('Selected City ID:', selectedId);
  console.log('Selected City Name:', this.indianCities[selectedId]);
  this.weatherData=''
  this.http.makeGetRequest(weatherApi.getWeatherForcastByCityId+selectedId).subscribe(res=>{
console.log(res)
this.weatherData = res;
  },
  error=>{

  }
)

  // You can now use selectedId to fetch weather data or anything else
}
}
