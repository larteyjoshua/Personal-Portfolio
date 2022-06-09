import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SkilsComponent } from './skils/skils.component';
import { IntroComponent } from './intro/intro.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsComponent } from './projects/projects.component';
// Import library module



@NgModule({

  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],

  declarations: [
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    SkilsComponent,
    IntroComponent,
    ProjectsComponent
  ],
  exports: [
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    SkilsComponent,
    IntroComponent,
    ProjectsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule { }
