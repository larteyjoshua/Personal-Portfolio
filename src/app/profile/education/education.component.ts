import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { Education } from '../../model/index';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

educations: Education[];

  constructor(private service:ProfileService) {
    this.educations = this.service.getEducation();
   }

  ngOnInit(): void {
  }

}
