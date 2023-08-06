import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.css'],
})
export class IssueCreateComponent {
  showModal = false;
  employeeId = '';

  constructor(private router: Router) {}

  openModal() {
    
    this.showModal = true;
  }

  checkEmployeeId(employeeId: string) {
    // Replace with your ExcelService logic to check if employeeId is valid
    if (this.isValidEmployeeId(employeeId)) {
      this.router.navigate(['/issue-details', employeeId]);
    } else {
      alert('Invalid Employee ID');
    }
  }

  // Replace this with actual validation logic
  isValidEmployeeId(employeeId: string): boolean {
    return true;
  }
}
