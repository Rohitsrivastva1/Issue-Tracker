import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:5000'; // Change the port if needed

  // private apiUrl = 'http://127.0.0.1:5000/api/login'; // Replace with your API URL

  constructor(private http: HttpClient) {} // Make sure HttpClient is injected here

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}