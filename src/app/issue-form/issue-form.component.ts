import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../models/issue.model'; // Import your Issue model

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css'],
})
export class IssueFormComponent {
  issueForm: FormGroup;
  userData: any = {}; // Initialize with an empty object
  statusOptions: string[] = [
    'New',
    'In Progress',
    'Resolved',
    'Feedback',
    'Closed',
    'Rejected',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
  private apiUrl = 'http://localhost:5000'; // Change the port if needed

  onUserIdEnter(event: any) {
    if (event.key === 'Enter') {
      const userIdControl = this.issueForm.get('userId');

      if (userIdControl) {
        const enteredUserId = userIdControl.value;
        console.log(enteredUserId);

        this.http
          .post(`${this.apiUrl}/api/get-user-data`, { userId: enteredUserId })
          .subscribe(
            (data) => {
              this.userData = data;
              // Update form fields with fetched data
              this.issueForm.patchValue({
                userName: this.userData.userName,
                circle: this.userData.circle,
                ba: this.userData.ba,
                phone: this.userData.phone,
                // ... update other form controls
              });
            },
            (error) => {
              console.error('Error fetching user data:', error);
            }
          );
      }
    }
  }

  onSubmit() {
    // Handle form submission and issue creation here
    const newIssue: Issue = this.issueForm.value;
    console.log(newIssue);
    // Send newIssue to your backend API using HttpClient
    // You need to set up an API endpoint in your backend to handle this
  }

  preFillDateTime() {
    const currentDateTime = new Date(); // Get the current date and time
    this.issueForm.patchValue({
      issueDate: currentDateTime.toISOString().slice(0, 16), // Format as "yyyy-MM-ddTHH:mm"
      // You can also set other fields here if needed
    });
  }
}
