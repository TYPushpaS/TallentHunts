import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InterviewService } from '../interview.service';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {

  constructor(private service:SelectService,private router:Router) { 
    this.getSchedule();
  }
  Candidate : any;
  remarksObject={
    _id:null,
    interviewType:null,
    clientName:null,
    candidateName:null,
    remarksDate:null,
    remark:null,
    skill:null,
    email:null,
    qualification:null,
    passoutYear:null,
    degreePer:null,
    experienceYear:null,
    currentDesignation:null,
    currentCTC:null,
    noticePeriod:null,
    location:null,

  }
  
  getSchedule() {
    this.service.getScheduleDetails().subscribe(data => {
      console.log(data)
      this.Candidate = data;
      console.log(this.Candidate)
    }, err => {
      console.log(err);
    }, () => {
      console.log('scheduleGot');
    })
  }
  selectCandidate(details){
     this.remarksObject=details;
  }
  
  sendRemarks(form:NgForm){
    this.service.postSelect(form.value).subscribe(data=>{
      this.router.navigateByUrl('/selected')
    },err=>{
      console.log(err)
    },()=>{
      console.log("selected")
    })
  }
  ngOnInit() {
  }
}
