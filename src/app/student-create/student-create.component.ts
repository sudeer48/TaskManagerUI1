import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs';
import { StdService } from 'src/app/StudentService';
import Swal from 'sweetalert2';
import { Student } from '../Models/Student';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styles: [
  ]
})
export class StudentCreateComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  studentId: any;
  studentId1: any;
  //studentservice: any;
  constructor(private formBuilder: FormBuilder,
    private studentservice: StdService
  ) {


  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  get f() { return this.form.controls; }
  ngOnInit() {


    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      schoolId: [''],
      grade: ['']
      //     firstName: ['', Validators.required],
      //     lastName: ['', Validators.required],
      //     email: ['', [Validators.required, Validators.email]],
      //     role: ['', Validators.required],
      //     password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      //     confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
    });

    // this.studentId= this.studentservice.getUpdate().subscribe((data: any) => {
    //   console.log(data+1);
    //  this.studentId1=data;
    //  alert(this.studentId1);
    // })

    this.studentservice.getAll().subscribe((data: any) => {
      console.log(data[data.length - 1].id);
      this.studentId1 = data[data.length - 1].id;
      this.form.controls['id'].patchValue(++this.studentId1);
    })



  }
  RegisterStudent() {

    let leaveRequest = this.form.value;
    this.studentservice.insertData(leaveRequest)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          if (item.response) {
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


