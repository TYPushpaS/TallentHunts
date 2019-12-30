import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../requirements.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { Router } from '@angular/router';
@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private service: RequirementsService,private router:Router) {
    this.getRequirements();
  }

  //All Requirement Stored In requirement Array
  requirements: any = [];
 

  //getting all the requirement from backend
  getRequirements() {
    this.service.getRequirements().subscribe(data => {
      this.requirements = data;
      // console.log(this.requirements)
    }, err => {
      console.log(err);
    }, () => {
      console.log('Requirement Got');
    })
  }


  selectPericularId(rerquirement) {
          this.router.navigateByUrl('/schedule-interview')

  }
  ngOnInit() {
  }
}
