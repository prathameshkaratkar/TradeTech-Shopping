import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit{
  users: any[] = []
  constructor(private authService: AuthService) {}
  ngOnInit() {
    // return this.authService.getAllUsers().subscribe({
    //   next: (data) => {
    //     this.users = Array.isArray(data) ? data : [];
    //   },
    //   error: (err) => {
    //     console.error('Failed to fetch users', err);
    //   }
    // })
  }

}
