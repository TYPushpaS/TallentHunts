import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http:HttpClient) { }
  
  backendurl = 'http://localhost:4000';

 

  
getScheduleDetails(){
  return this.http.get(`${this.backendurl}/viewSchedule`);

}
}
