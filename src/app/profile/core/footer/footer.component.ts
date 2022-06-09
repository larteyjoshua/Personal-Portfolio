import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebookLink = 'https://web.facebook.com/salvation.jnr'
  twitterLink ='https://twitter.com/Jos_code'
  instagramLink = 'https://www.instagram.com/favourjoshuajnr/?hl=en'
  linkinLink = 'https://www.linkedin.com/in/joshua-lartey-2ba404199/'
  githubLink = 'https://github.com/larteyjoshua'

  constructor() { }

  ngOnInit(): void {
  }

}
