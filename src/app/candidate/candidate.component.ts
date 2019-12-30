import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  exist  = false;
  constructor(private candidateService : CandidateService,private router:Router) {  }
  candidateForm(candidateDetails) {
    this.candidateService.postCandidateData(candidateDetails).subscribe(data => {
      console.log(data);
      console.log('Addded SuccessFully');
      this.router.navigateByUrl('/schedule-interview')
    }, err => {
      console.log(err);
    }, () => {
      console.log('Data In service');
    });
  }

  ngOnInit() {
  }

}
