import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service'; // Create this service

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issueForm: FormGroup;
  employeeId!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private issueService: IssueService
  ) {
    this.issueForm = this.fb.group({
      date: ['', Validators.required],
      // Add other form controls for issue details
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

  onSubmit() {
    if (this.issueForm.valid) {
      const issueData = {
        employeeId: this.employeeId,
        date: this.issueForm.value.date,
        // Add other issue details
      };
      this.issueService.addIssue(issueData);
      this.router.navigate(['/dashboard']); // Redirect to dashboard or another route
    }
  }
}
