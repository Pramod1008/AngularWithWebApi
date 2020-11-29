import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly routeUrl ="https://localhost:44385/api"

  constructor(private httpclient: HttpClient) { }

  postEmployee(formData: Employee){
   return this.httpclient.post(this.routeUrl+'/Employees',formData);
  }

  refershList(){
   return this.httpclient.get(this.routeUrl+'/Employees')
   .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData: Employee){
    return this.httpclient.put(this.routeUrl+'/Employees/'+formData.EmployeeID,formData);
   }

   deleteEmployee(eid: number){
    return this.httpclient.delete(this.routeUrl+'/Employees/'+eid);
   }

}
