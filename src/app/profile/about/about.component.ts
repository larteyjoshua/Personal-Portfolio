import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
paragraphOne ='Growing up, I was trained with the spirit of detemination and the willingness of doing something new.' +
'This always help me in my career in the areas of learning addtional skils, meeting new people or exploring new opportunities.' +
'I belive, as difficult as it is, with time, I will be able to understand do it to expectation. '

paragraphTwo = 'I am a lover of technology and inovation and everything related to it.'+
' This increase my desire to face any problem given to meand solve with a smile as soon as posible.'+
'I am very time concious and belive time things should be done ans soon as possible for the fact that you are not busy with staff.'
paragraphThree = 'These are few things about me.' +
'To know more about me, just send me an email and I will respond as soon as possible...'
dob = 'November 12 1989'
email = 'larteyjoshua@gmail.com'
mobile = '+233249643365'
location = 'Accra, Ghana'
language = 'English'
  constructor() { }

  ngOnInit(): void {
  }

}
