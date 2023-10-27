import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { Location } from '@angular/common';
import emailjs from '@emailjs/browser';
import { LoaderService } from '../../services/loader/loader.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private location: Location, private loadingService: LoaderService, private router: Router) { }
  contact: Contact = {
    email: '', name: '', message: ''
  };
  submitted = false;
  onSubmit() {
    this.loadingService.setLoading(true);
    emailjs.send("service_kcxt3bg", "template_h1sxvfg", {
      message: this.contact.message,
      name: this.contact.name,
      email: this.contact.email,
    }, "QS89fzMADUBDN6ivZ").then((response) => {
      this.submitted = true;
      this.loadingService.setLoading(false);
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      this.submitted = false;
      console.log('FAILED...', err);
      this.loadingService.setLoading(false);
    });
  }
  done() {
    this.location.back();
  }
  scanner(): void {
    this.router.navigate(['/scanner']);
  }
}
