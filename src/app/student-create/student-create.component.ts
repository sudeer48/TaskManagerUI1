import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs';
import { StdService } from 'src/app/Services/StudentService';
import Swal from 'sweetalert2';
import { Student } from '../Models/Student';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styles: [
  ]
})
export class StudentCreateComponent implements OnInit {

  form: FormGroup;
  studentId: any;
  studentId1: any;
  studentId2: any;
  Component2Data: any = '';
  //studentservice: any;
  constructor(private formBuilder: FormBuilder, private studentservice: StdService) {
    // studentservice.SharingData.subscribe((res: any) => {  
    //   this.Component2Data = res;
    // })

  }

  get f() { return this.form.controls; }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      schoolId: [''],
      grade: ['']
    });


    // this.studentId= this.studentservice.getUpdate().subscribe((data: any) => {
    //   console.log(data+1);
    //  this.studentId1=data;
    //  alert(this.studentId1);
    // })

    this.studentservice.getAll().subscribe((data: any) => {
      this.studentId2 = data[data.length - 1].id;
      this.form.controls['id'].patchValue(++this.studentId2);
      //this.studentservice.changeDataSubject(data);
      //this.studentId2 = data;

      //console.log(this.studentservice.changeDataSubject(data));
    })



  }
  RegisterStudent() {
    let leaveRequest = this.form.value;
    this.studentservice.insertData(leaveRequest)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          if (item.response) {
            this.form.reset();
            this.studentservice.getAll().subscribe((data: any) => {
              debugger;
              this.studentId1 = data;
            })
            Swal.fire({
              title: 'Record has been Inserted.',
              text: 'Record has been Inserted.',
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


