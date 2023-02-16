import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StdService } from 'src/app/Services/StudentService';
import Swal from 'sweetalert2';
import { StudentregistrationComponent } from '../studentregistration/studentregistration.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  message :any;
  @Input() data1:Student[];
  public students1?: Student[];
  studentId: any;
  Component1Data: any = '';
  constructor(public studentservice: StdService,public studentregistration:StudentregistrationComponent) { 
  }

  ngOnInit(): void {
    this.retrieveStudents();
    //this.message="Hi";
  }

  retrieveStudents(): void {
    this.studentservice.getAll()
      .subscribe({
        next: (data) => {
          this.data1 = data;
        },
        error: (e) => console.error(e)
      });
  }



  DeleteStudent(Empid: number) {
    let cancelLeave = new Student();
    cancelLeave.id = Empid;
    this.studentservice.deleteData(cancelLeave)
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

}
