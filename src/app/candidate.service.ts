import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http : HttpClient) { }
  
  backendurl = 'http://localhost:4000';

//creating Candidate
  postCandidateData(candidateDetails) {
    return this.http.post(`${this.backendurl}/addCandidate` , candidateDetails);
  }

//getting candidate
getCandidate() {
  return this.http.get(`${this.backendurl}/viewCandidate`);
}
getSchedule(){
return this.http.get(`${this.backendurl}/addSchedule`)
}
getInterview() {
  return this.http.get(`${this.backendurl}/scheduleInterview`);
}

postInterview(data) {
  return this.http.post(`${this.backendurl}/addInterview`, data);
}

  

}
