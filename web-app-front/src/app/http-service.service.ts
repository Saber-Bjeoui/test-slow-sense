import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}


  getShapes() {
    return this.http.get(`${this.apiUrl}/shapes`);
  }
}
