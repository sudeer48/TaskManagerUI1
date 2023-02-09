import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../Models/Student';
import { StdService } from 'src/app/StudentService';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public students1?: Student[];
  studentId: any;
  //StudentService: any;
  constructor(public studentservice: StdService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentservice.getAll()
      .subscribe({
        next: (data) => {
          this.students1 = data;
          this.studentId = 4;
          this.studentservice.sendUpdate(5);

        },
        error: (e) => console.error(e)
      });
  }



  DeleteStudent(Empid: number) {
    let cancelLeave = new Student();
    cancelLeave.id = Empid;
    //cancelLeave.ManagerId = this.employeeProfile.EmployeeSlno;

    this.studentservice.deleteData(cancelLeave)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          this.retrieveStudents();
          //this.studentservice.sendUpdate(true);
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