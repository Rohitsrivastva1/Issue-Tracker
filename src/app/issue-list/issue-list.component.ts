import { Component } from '@angular/core';
import { Issue } from '../models/issue.model'; // Import your Issue model
import { IssueService } from '../issue.service';
  
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent {
  issues: any[] = [];

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues(): void {
    this.issueService.getIssues().subscribe(
      (issues) => {
        this.issues = issues;
      },
      (error) => {
        console.error('Error fetching issues:', error);
      }
    );
  }
}