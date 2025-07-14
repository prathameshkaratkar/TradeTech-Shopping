import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent {
  title = 'Contact';
  subtitle = 'We are here for your Question';

  
  firstName = '';
  lastName = '';
  email = '';
  subject = '';
  message = '';

  onSubmit() {
    console.log('Form Submitted!');
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
    alert(`Thank you, ${this.firstName}! We received your message.`);
    
    
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
