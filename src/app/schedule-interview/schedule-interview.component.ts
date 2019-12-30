import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {

  Candidate : any;
  interview:any;
  scheduleInterviews={
    _id:null,
    interviewType:null,
    candidateName:null,
    skill:null,
    email:null,
    Date:null,
    qualification:null,
    passoutYear:null,
    degreePer:null,
    experienceYear:null,
    currentDesignation:null,
    currentCTC:null,
    noticePeriod:null,
    govtId:null
  }






    

  
  
  constructor(private service : CandidateService,private router:Router) {
    this.getCandidate();
    this.getScheduleInterview()
    
   }
  
  getCandidate() {
    this.service.getCandidate().subscribe(data => {
      console.log(data)
      this.Candidate = data;
      console.log(this.Candidate)
    }, err => {
      console.log(err);
    }, () => {
      console.log('Requirement Got');
    })
  }
 
  CreateCandidate(){
    this.router.navigateByUrl('/candidate')
  }
  
  getScheduleInterview(){
    this.service.getInterview().subscribe(data => {
      console.log(data)
      this.Candidate = data;
      console.log(this.Candidate)
    }, err => {
      console.log(err);
    }, () => {
      console.log('Requirement Got');
    })
  }

  selectCandidate(details){
    console.log(details)
    this.scheduleInterviews=details;
    

  }

 
  createInterview(form:NgForm){
    this.service.postInterview(form.value).subscribe(data=>{
      this.router.navigateByUrl('/interview-details')
    },err=>{
      console.log(err)
    },()=>{
      console.log("schedule got")
    })
  }
 

  ngOnInit() {
  }

}
