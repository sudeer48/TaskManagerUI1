import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Student } from '../Models/Student';
import { StdService } from 'src/app/Services/StudentService';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() data1:any;
  public students1?: Student[];
  studentId: any;
  Component1Data: any = '';
  //StudentService: any;
  constructor(public studentservice: StdService) { 
    // studentservice.SharingData.subscribe((res: any) => {
    //   this.Component1Data = res;
    // })
  }

  ngOnInit(): void {
    debugger;
    
    this.retrieveStudents();
    this.students1 = this.data1;
    //this.studentservice.changeDataSubject(this.retrieveStudents());
  }

  retrieveStudents(): void {
    this.studentservice.getAll()
      .subscribe({
        next: (data) => {
          this.students1 = data;
          //this.studentservice.sendUpdate(5);

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