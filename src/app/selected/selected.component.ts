import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
Select:any;
  constructor(private service:SelectService) { }
  getSelect() {
    this.service.getSelectDetails().subscribe(data => {
      console.log(data)
      this.Select = data;
      console.log(this.Select)
    }, err => {
      console.log(err);
    }, () => {
      console.log('scheduleGot');
    })
  }
  ngOnInit() {
  }

}
