import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private apiUrl = ' http://127.0.0.1:5000'; // Replace with the base URL of your Flask server

  constructor(private http: HttpClient) {}

  addIssue(issueData: any): Observable<any> {
    console.log('use')
    const addIssueUrl = `${this.apiUrl}/api/add-issue`;
    return this.http.post<any>(addIssueUrl, issueData);
  }

  getIssues(): Observable<any[]> {
    const getIssuesUrl = `${this.apiUrl}/api/issues`;
    return this.http.get<any[]>(getIssuesUrl);
  }
}
