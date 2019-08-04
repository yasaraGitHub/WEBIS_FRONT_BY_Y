import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { WebcatComponentComponent } from './components/webcat-component/webcat-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { JscatComponent } from './components/jscat/jscat.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MathsCoursesComponent } from './components/maths-courses/maths-courses.component';
import { CourseDetailsFormComponent } from './components/content-provider/course-details-form/course-details-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import {AbcService} from './abc.service';
import {AuthService} from './services/auth.service';
import {CoursesService} from './services/courses.service';

import { environment } from '../environments/environment';

import { CategoryFilterPipe } from './pipes/category-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WebcatComponentComponent,
    NavbarComponentComponent,
    RegisterComponent,
    LogInComponent,
    JscatComponent,
    AboutComponent,
    FooterComponent,
    CategoryComponent,
    HomeComponent,
    NotfoundComponent,
    DashboardComponent,
    MathsCoursesComponent,
    CourseDetailsFormComponent,
    CategoryFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFlashMessagesModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule

  ],
  providers: [AbcService,AuthService,CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
