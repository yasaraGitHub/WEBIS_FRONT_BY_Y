import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { WebcatComponentComponent } from './components/webcat-component/webcat-component.component';
import { JscatComponent } from './components/jscat/jscat.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent} from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MathsCoursesComponent } from './components/maths-courses/maths-courses.component';
import { CourseDetailsFormComponent } from './components/content-provider/course-details-form/course-details-form.component';




const routes: Routes = [
{path:'',component:HomeComponent},
{path:'webcat'  , component: WebcatComponentComponent},
{path:'login'  , component:LogInComponent},
{path:'register', component:RegisterComponent},
{path:'js',component:JscatComponent},
{path:'about',component:AboutComponent},
{path:'category',component:CategoryComponent},
{path:'dashboard',component:DashboardComponent},
{path:'maths',component:MathsCoursesComponent},
{path:'CourseDetailsForm',component:CourseDetailsFormComponent},



//should be last route all the time in this array
{path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
