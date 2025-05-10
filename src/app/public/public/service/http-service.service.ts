import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
   makeGetRequest(url:string) {
   // const url = 'https://api.example.com/data'; // replace with your API
    const headers = new HttpHeaders({
      'X-Api-Key': environment.x_api_key
    });

    return this.http.get(environment.base_url+url, { headers })
  }
}
