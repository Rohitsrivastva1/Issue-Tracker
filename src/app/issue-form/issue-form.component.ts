import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../models/issue.model'; // Import your Issue model

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder) {
   this.issueForm = this.fb.group({
     userId: ['', Validators.required],
     userName: ['', Validators.required],
     circle: ['', Validators.required],
     ba: ['', Validators.required],
     phone: ['', Validators.required],
     affectedUsers: ['', Validators.required],
     issueCategories: ['', Validators.required],
     issueDate: ['', Validators.required],
     resolutionTime: ['', Validators.required],
     issueDescription: ['', Validators.required],
     status: ['', Validators.required],
     remarks: ['', Validators.required],
     ticketCreatedBy: ['', Validators.required],
     // Add more form controls as needed
   });

  }

  // Add methods for form submission and validation here
}
