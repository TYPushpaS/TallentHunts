import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../requirements.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {

  constructor(private service: RequirementsService,private router:Router) { }

  //adiing a new Requirement
  addRequirement(requirement) {

    this.service.addRequirment(requirement.value).subscribe(res => {
      console.log('Interview scheduled  successfully');
      alert('Interview scheduled  successfully...!')
      this.router.navigateByUrl("getInterview");
      requirement.reset();
   }, err => {
      console.log('Interview scheduling failed');
   });
    
  }

  ngOnInit() {
  }
}