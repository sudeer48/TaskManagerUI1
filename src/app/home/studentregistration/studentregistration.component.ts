import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Services/EmployeeService';
import Swal from 'sweetalert2';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent implements OnInit {

  form: FormGroup;
  studentId2: any;
  studentData: any;
  roleData: any;
  @ViewChild(EmployeeDetailsComponent) child: any;
  message: string;
  constructor(private formBuilder: FormBuilder, private employeeservice: EmployeeService) {
  }

  autoChangeVal() {
    this.employeeservice.getAll().subscribe((data: any) => {
      this.studentId2 = data[data.length - 1].id;
      this.form.controls['id'].patchValue(++this.studentId2);
    })
  }
  get f() { return this.form.controls; }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      schoolId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      grade: [''],
      roleId: ['',[Validators.required]],
      username: [''],
      password: ['']
    });
    this.autoChangeVal();
    this.getRoles();
  }

  ngAfterViewInit() {
    this.message = this.child.message
    //alert(this.message);
  }

  getRoles() {
    this.employeeservice.getRoleDetails().subscribe((roles: any) => {
      debugger;
      this.roleData = roles;
    })
  }
  RegisterStudent() {
    debugger;
    let leaveRequest = this.form.value;
    this.employeeservice.insertData(leaveRequest)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          if (item.response) {
            if (item.isSuccess) {
              this.form.reset();
              this.employeeservice.getAll().subscribe((data: any) => {
                debugger;
                this.studentData = data;
                this.studentId2 = data[data.length - 1].id;
                this.form.controls['id'].patchValue(++this.studentId2);
              })
              Swal.fire({
                title: item.message,
                text: item.message,
                icon: 'success',
                confirmButtonColor: 'rgb(54, 69, 116)',
                confirmButtonText: 'Ok'
              });
            }
            else {
              Swal.fire({
                title: item.message,
                text: item.message,
                icon: 'error',
                confirmButtonColor: 'rgb(54, 69, 116)',
                confirmButtonText: 'Ok'
              });
            }
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
