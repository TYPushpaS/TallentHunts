import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart1Component } from './chart1/chart1.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { SelectedComponent } from './selected/selected.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path : 'add-requirement' , component: AddRequirementComponent},
  {path : 'requirements' , component: RequirementsComponent},
  {path : 'candidate' , component: CandidateComponent},
  {path : 'schedule-interview' , component: ScheduleInterviewComponent},
  {path : 'interview-details' , component: InterviewDetailsComponent},
  {path : 'selected' , component: SelectedComponent},


  {path : 'chart' , component: Chart1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
