import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SendEmail } from '../../model/index';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};
  phoneNumber = '+233249643365'
  emailaddress = 'larteyjoshua@gmail.com'
  constructor() { }

  ngOnInit(): void {
  }

   onSubmit(name:string, subject:string, email: string, message: string) {

    console.log(name, email, subject, message)

  //   // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   // this.http.post('https://formspree.io/f/mwkwpzve',
  //   //   { name: name, subject: subject, replyto: email, message: message },
  //   //   { 'headers': headers }).subscribe(
  //   //     response => {
  //   //       console.log(response);
  //   //     }
  //   //   );
   }

}
