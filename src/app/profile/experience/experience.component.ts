import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { JobExperience } from '../../model/index';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    experiences: JobExperience[];

  constructor(private service:ProfileService) {
    this.experiences = this.service.getExperience();
   }

  ngOnInit(): void {

  }

}
