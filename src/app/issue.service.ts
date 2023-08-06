import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: any[] = [];

  constructor() {}

  addIssue(issueData: any) {
    this.issues.push(issueData);
  }

  getIssues() {
    return this.issues;
  }
}
