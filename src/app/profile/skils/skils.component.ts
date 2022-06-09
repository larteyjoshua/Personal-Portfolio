import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { Skills } from '../../model/index';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {
  skills:Skills[]

  constructor(private service:ProfileService
    ) {
    this.skills = this.service.getSkills();
   }

  ngOnInit(): void {
  }

}
