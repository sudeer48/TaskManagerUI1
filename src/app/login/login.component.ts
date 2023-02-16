import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StdService } from '../Services/StudentService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  value1: any;
  value2: any;
  //studentservice: any;
  constructor(private formBuilder: FormBuilder, private studentservice: StdService,private router: Router) { }

  get f() { return this.form.controls; }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [],
      password: []     
    });
  }
  Authenticate()
  {
    debugger;
    let leaveRequest = this.form.value;
    this.studentservice.login(leaveRequest)
      .subscribe((item: any) => {
        debugger;
        if (item) {
          if (item.response) {
            debugger;
            this.router.navigate(['/home']);
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid Login Credentials!',
              footer: 'Please check your Login Credentials.'
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
