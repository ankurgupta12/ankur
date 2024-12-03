import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient,
    @Inject(BASE_API_URL) private  baseUrl: string) { }

  saveData(data:any){
    return this.httpClient.post(`/no-deposite/addUser`,data)
  }
}
