import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StdService } from 'src/app/Services/StudentService';
import Swal from 'sweetalert2';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent implements OnInit {

  form: FormGroup;
  studentId2: any;
  studentData: any;
  @ViewChild(StudentDetailsComponent) child:any;
  message:string;
  constructor(private formBuilder: FormBuilder, private studentservice: StdService) {
  }

  autoChangeVal()
  {
    this.studentservice.getAll().subscribe((data: any) => {
      this.studentId2 = data[data.length - 1].id;
      this.form.controls['id'].patchValue(++this.studentId2);
    })
  }
  get f() { return this.form.controls; }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      schoolId: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      grade: [''],
      username:[''],
      password:['']
    });
    this.autoChangeVal();
  }

  ngAfterViewInit() {
    this.message = this.child.message
    //alert(this.message);
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
              this.studentData = data;
              this.studentId2 = data[data.length - 1].id;
              this.form.controls['id'].patchValue(++this.studentId2);
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
  }

}
