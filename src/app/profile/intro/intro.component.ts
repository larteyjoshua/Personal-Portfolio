import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  fullName ='Lartey Joshua'
  cvLink = 'https://drive.google.com/file/d/116nZazahPg0LOg-7Hunk8hsZYmp_Mdxy/view?usp=sharing'
  facebookLink = 'https://web.facebook.com/salvation.jnr'
  twitterLink ='https://twitter.com/Jos_code'
  instagramLink = 'https://www.instagram.com/favourjoshuajnr/?hl=en'
  linkinLink = 'https://www.linkedin.com/in/joshua-lartey-2ba404199/'
  githubLink = 'https://github.com/larteyjoshua'

  constructor() { }

  ngOnInit(): void {
  }

}
