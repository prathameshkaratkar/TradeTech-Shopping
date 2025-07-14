import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  constructor(private router: Router) {}
  title = "About"
  description = 'We are passionate about delivering quality electronics at your doorstep.'
  contactText = 'Contact Us';
  image2 = '/public/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg'
  goToContact() {
    this.router.navigate(['/contact']);
  }
}
