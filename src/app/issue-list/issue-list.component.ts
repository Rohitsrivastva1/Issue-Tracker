import { Component } from '@angular/core';
import { Issue } from '../models/issue.model'; // Import your Issue model

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent {
  
  issues: Issue[] = []; // Populate this array with actual issue data

  // Add methods for fetching and displaying issues here
}