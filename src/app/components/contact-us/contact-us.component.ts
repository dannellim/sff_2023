import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { Location } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private location: Location) { }
  contact: Contact = {
    email: '', name: '', message: ''
  };
  submitted = false;
  onSubmit() {
    emailjs.send("service_kcxt3bg", "template_h1sxvfg", {
      message: this.contact.message,
      name: this.contact.name,
      email: this.contact.email,
    }, "QS89fzMADUBDN6ivZ").then((response) => {
      this.submitted = true;
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      this.submitted = false;
      console.log('FAILED...', err);
    });
  }
  done() {
    this.location.back();
  }
}
