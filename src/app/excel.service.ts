import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  employeeIdExists(employeeId: string): boolean {
    // Replace this with actual Excel data check
    return true;
  }
}
