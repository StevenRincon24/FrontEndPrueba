import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}

  url:string="https://localhost:44363/api/client";

  getClient(){
    return this.http.get(this.url);
  }
}
