import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refershList();
  }

  populateForm(emp: Employee){
    this.service.formData = Object.assign({},emp);
  }

 onDelete(eid: number){
   if(confirm('Are you sure to delete this record')){
      this.service.deleteEmployee(eid).subscribe(res => {
      this.service.refershList();
      this.toastr.warning('Deleted Successfully','EMP.Register');
    });
   }   
 }

}
