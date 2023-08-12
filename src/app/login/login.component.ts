import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('button click');
    const { username, password } = this.loginForm.value;
    this.loginService.login(username, password).subscribe(
      (response) => {
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to dashboard or perform required actions
        console.log('Login successful');
        this.router.navigate(['/dashboard']); // Change '/dashboard' to your actual dashboard route
      },
      (error) => {
        console.log('Invalid credentials');
      }
    );
  }     
}
