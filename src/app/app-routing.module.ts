import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { AboutComponent } from './profile/about/about.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { SkilsComponent } from './profile/skils/skils.component';
import { EducationComponent } from './profile/education/education.component';
import { ContactComponent } from './profile/contact/contact.component';
import { ProjectsComponent } from './profile/projects/projects.component';

const config: ExtraOptions = {
  useHash: true,
}
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'project',
        component: ProjectsComponent
      },
      {
        path: 'skill',
        component: SkilsComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
