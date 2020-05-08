import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http: HttpClient) { }

  checkLogin(){
    return this.http.get<any>('/api/checkSession.php')
  }
}
