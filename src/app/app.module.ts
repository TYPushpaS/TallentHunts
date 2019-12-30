import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { HttpClientModule } from '@angular/common/http';
import { RequirementsComponent } from './requirements/requirements.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Chart1Component } from './chart1/chart1.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { SelectedComponent } from './selected/selected.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRequirementComponent,
    RequirementsComponent,
    CandidateComponent,
    FooterComponent,
    DashboardComponent,
    Chart1Component,
    JwPaginationComponent,
    ScheduleInterviewComponent,
    InterviewDetailsComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
 
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
