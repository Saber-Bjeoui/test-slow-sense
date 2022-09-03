import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}


  getShapes() {
    return this.http.get(`${this.apiUrl}/shapes`);
  }
}
