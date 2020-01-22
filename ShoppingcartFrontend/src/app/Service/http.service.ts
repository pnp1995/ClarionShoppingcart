import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.Baseurl
  jsonUrl = environment.jsonserver

  get(url) {

    let option =
    {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    console.log('in http get service.....');
    return this.httpClient.get(this.baseUrl + url, option);
  }

  post(url, item) {
    let option =
    {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpClient.post(this.jsonUrl + url, item, option);
  }
  getCart() {
    let option =
    {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpClient.get(this.jsonUrl + 'products', option);
  }
  getProduct(url) {
    let option =
    {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpClient.get(this.baseUrl + url, option)
  }
}