import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _url: string = environment.url;
  constructor(private http:HttpClient) { } 
  
  loginRequest(data:any) {
    return this.http.post(this._url + 'login', data);
  }
}
