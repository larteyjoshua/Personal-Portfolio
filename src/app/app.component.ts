import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';
  constructor(private spinner: NgxSpinnerService){

}
  ngOnInit(): void {
    AOS.init();

  }
}

