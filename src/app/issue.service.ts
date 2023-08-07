import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: any[] = [];

  constructor(private http: HttpClient) {}

  addIssue(issueData: any) {
    this.issues.push(issueData);
  }

  getIssues(): Observable<any[]> {
    return this.http.get<any[]>('/api/issues');
  }
}
