import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  name='';
  email='';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}
  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: (response) =>{
        alert(`Thank for registering, ${this.name}`);
        this.name = this.email = this.password = '';
        this.router.navigate(['/login'])
      },
      error: (err) => {
        alert('Registration failed. Please try again.');
        console.error('Registration error:', err);
      }
    })

    // console.log('Register clicked');
    // console.log(`Name: ${this.name}, Email: ${this.email}`);
    // alert(`Thank you for registering, ${this.name}`)
  }
}
