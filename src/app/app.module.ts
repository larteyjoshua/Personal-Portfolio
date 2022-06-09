import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileModule } from './profile/profile.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProfileModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
