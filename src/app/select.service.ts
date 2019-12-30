import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http : HttpClient) { }
  
  backendurl = 'http://localhost:4000';

  getScheduleDetails(){
    return this.http.get(`${this.backendurl}/viewSchedule`);
  
  }
  postSelect(data){
    return this.http.post(`${this.backendurl}/postSelect`,data)
  }
  getSelectDetails(){
    return this.http.get(`${this.backendurl}/getSelect`);

  }
}
