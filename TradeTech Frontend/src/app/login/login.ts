import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email='';
  password ='';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.authService.login(user).subscribe({
      next: (res)=> {
        alert(`Welcome back, ${this.email}`);
        console.log('User found:',res);
        this.router.navigate(['/shop'])
      },
      error: (err) => {
        alert('Invalid email or password');
        console.error('Login error:', err);
      }
    })
  }
}
