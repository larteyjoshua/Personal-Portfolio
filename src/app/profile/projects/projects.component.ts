import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { Project } from '../../model/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private service:ProfileService) {
    this.projects = this.service.getProjects();
   }


  ngOnInit(): void {
  }

}
