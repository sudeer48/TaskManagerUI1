import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { EmployeeService } from 'src/app/Services/EmployeeService';
import Swal from 'sweetalert2';
import { StudentregistrationComponent } from '../studentregistration/studentregistration.component';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  faTrash = faTrash;
  faEdit = faEdit;
  message :any;
  @Input() data1:Student[];
  public students1?: Student[];
  studentId: any;
  Component1Data: any = '';
  displayBasic2: boolean;
  constructor(public employeeservice: EmployeeService,public studentregistration:StudentregistrationComponent) { 
  }

  ngOnInit(): void {
    this.retrieveStudents();
    //this.message="Hi";
  }

  retrieveStudents(): void {
    this.employeeservice.getAll()
      .subscribe({
        next: (data) => {
          this.data1 = data;
        },
        error: (e) => console.error(e)
      });
  }

  EditStudent(EmpId:number)
  {
    this.displayBasic2 = true;
  }

//   showBasicDialog2() {
//     this.displayBasic2 = true;
// }

  DeleteStudent(Empid: number) {
    debugger;
    let cancelLeave = new Student();
    cancelLeave.id = Empid;
    this.employeeservice.deleteData(cancelLeave)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          this.studentregistration.autoChangeVal();
          this.retrieveStudents();
          if (item.response) {
            Swal.fire({
              title: 'Record has been Removed.',
              text: 'Record has been Removed.',
              icon: 'success',
              confirmButtonColor: 'rgb(54, 69, 116)',
              confirmButtonText: 'Ok'
            });
          }
          else {
            Swal.fire({
              title: 'Oops...! Something went Wrong !',
              html: '<p class="text-danger" >' + item.Message + '</p>',
              icon: 'error',
              confirmButtonColor: 'rgb(54, 69, 116)',
              confirmButtonText: 'Ok'
            });
          }
        }
        else {
          Swal.fire({
            title: 'Oops...! Something went Wrong !',
            html: 'Your leaves are not applied.',
            icon: 'error',
            confirmButtonColor: 'rgb(54, 69, 116)',
            confirmButtonText: 'Ok'
          });
        }
      });
    //.add(() => this.loading = false);
  }

  getValue()
  {
    this.employeeservice.getText();
  }
}
