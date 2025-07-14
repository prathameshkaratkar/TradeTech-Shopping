import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  subHeading="Latest, Seasonal, Beautiful"
  contentHead="Order Now, Get Some Delivery Today"
  cards = 3;
  showAll() {
    this.router.navigate(['/shop'])
  }
}
