import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  constructor(private http: HttpClient ) {}


  url:string= 'http://localhost:8082/talenthunt';
  
addRequirment(data) {
    return this.http.post(`${this.url}/addrequirement`, data, headeroption );
  }



  //getting requirement
  getRequirements() {
    return this.http.get(`${this.url}/viewRequirement`);
  }
}
